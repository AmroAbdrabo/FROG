// @flow
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { uuid, getSlug, values } from '/imports/frog-utils';
import { difference } from 'lodash';

import { Activities, Connections } from './activities';
import { activityTypesObj } from '../activityTypes';
import { Operators } from './operators';
import {
  runSessionFn,
  runNextActivity,
  updateNextOpenActivities
} from './engine';
import { Graphs, addGraph } from './graphs';
import valid from './validGraphFn';

const SessionTimeouts = {};
const DEFAULT_COUNTDOWN_LENGTH = 10000;

export const Sessions = new Mongo.Collection('sessions');

export const restartSession = (session: Object) => {
  const graph = Graphs.findOne(session.graphId);
  if (!graph || graph.broken) {
    // eslint-disable-next-line no-alert
    window.alert('Cannot restart session, graph currently broken');
    return;
  }
  Meteor.call('sessions.restart', session);
};

Meteor.methods({
  'sessions.restart': function(session) {
    if (Meteor.isServer) {
      const graphId = session && session.graphId;
      if (!graphId) {
        return;
      }
      sessionCancelCountDown(session._id);
      const prev = Sessions.find({
        slug: { $regex: '^' + session.slug + '-old-' }
      }).fetch();
      let nextNum = 1;
      if (prev && prev.length > 0) {
        const findIndex = s => parseInt(s.slug.split('-').pop(), 10);
        const prevNum = Math.max(...prev.map(findIndex));
        nextNum = prevNum + 1;
      }

      Sessions.update(session._id, {
        $set: { slug: session.slug + '-old-' + nextNum }
      });
      Meteor.users.update(this.userId, {
        $unset: { 'profile.controlSession': '' }
      });
      const newSessionId = addSessionFn(graphId, session.slug);
      if (session.settings) {
        Sessions.update(newSessionId, {
          $set: { settings: session.settings }
        });
      }
      Meteor.users.update(this.userId, {
        $set: { 'profile.controlSession': newSessionId }
      });
      runSessionFn(newSessionId);
    }
  },
  'remove.all.users': session =>
    Meteor.users.update(
      { joinedSessions: session.slug },
      { $pull: { joinedSessions: session.slug } },
      { multi: true }
    )
});

export const removeAllUsers = (session: string) =>
  Meteor.call('remove.all.users', session);

export const setSessionUIStatus = (sessionId: string, val: boolean) => {
  Sessions.update(sessionId, { $set: { uiStatus: val } });
};

export const setTeacherSession = (sessionId: ?string) => {
  if (!sessionId) {
    Meteor.users.update(Meteor.userId(), {
      $unset: { 'profile.controlSession': '' }
    });
  } else {
    Meteor.users.update(Meteor.userId(), {
      $set: { 'profile.controlSession': sessionId }
    });
  }
};

export const addSession = (graphId: string): Promise<string> =>
  new Promise((resolve, reject) =>
    Meteor.call('add.session', graphId, null, (err, result) => {
      if (result === 'invalidGraph') {
        // eslint-disable-next-line no-alert
        window.alert(
          'Cannot create session from invalid graph. Please open graph in graph editor and correct errors.'
        );
        reject();
      } else {
        resolve(result);
      }
    })
  );

export const sessionStartCountDown = (
  sessionId: string,
  currentTime: number
) => {
  const session = Sessions.findOne(sessionId);
  updateSessionCountdownStartTime(sessionId, currentTime);
  Meteor.call('set.timeout', session.countdownLength, sessionId);
};

export const sessionCancelCountDown = (sessionId: string) => {
  updateSessionCountdownStartTime(sessionId, -1);
  updateSessionCountdownLength(sessionId, DEFAULT_COUNTDOWN_LENGTH);
  Meteor.call('clear.timeout', sessionId);
};

export const sessionChangeCountDown = (
  sessionId: string,
  modification: number,
  currentTime: number
) => {
  const session = Sessions.findOne(sessionId);
  Promise.resolve(
    updateSessionCountdownLength(
      sessionId,
      session.countdownLength + modification
    )
  ).then(() => {
    const session2 = Sessions.findOne(sessionId);
    if (session2.countdownStartTime > 0) {
      Meteor.call('clear.timeout', sessionId);
      Meteor.call(
        'set.timeout',
        session2.countdownStartTime + session2.countdownLength - currentTime,
        sessionId
      );
    }
  });
};

export const updateSessionState = (
  sessionId: string,
  state: string,
  currentTime: number = 0
) => {
  const session = Sessions.findOne(sessionId);
  switch (state) {
    case 'STARTED':
      if (session.countdownStartTime !== -1) {
        updateSessionCountdownStartTime(sessionId, currentTime);
        Meteor.call('set.timeout', session.countdownLength, sessionId);
      }
      break;
    case 'PAUSED':
      if (session.countdownStartTime !== -1) {
        updateSessionCountdownLength(
          sessionId,
          session.countdownStartTime + session.countdownLength - currentTime
        );
        updateSessionCountdownStartTime(sessionId, -2);
      }
      Meteor.call('clear.timeout', sessionId);
      break;
    case 'STOPPED':
      sessionCancelCountDown(sessionId);
      break;
    default:
  }
  Sessions.update(sessionId, { $set: { state } });
};

const updateSessionCountdownLength = (id: string, countdownLength: number) =>
  Sessions.update(id, { $set: { countdownLength } });

const updateSessionCountdownStartTime = (
  id: string,
  countdownStartTime: number
) => Sessions.update(id, { $set: { countdownStartTime } });

export const updateOpenActivities = (
  sessionId: string,
  openActivities: Array<string>,
  timeInGraph: number
) => {
  if (Meteor.isServer) {
    Sessions.update(sessionId, { $set: { state: 'WAITINGFORNEXT' } });
    const oldOpen = Sessions.findOne(sessionId).openActivities;
    difference(oldOpen, openActivities).forEach(activityId =>
      Activities.update(activityId, { $set: { actualClosingTime: new Date() } })
    );
    openActivities.forEach(activityId => {
      Meteor.call('dataflow.run', 'activity', activityId, sessionId);
      const activity = Activities.findOne(activityId);
      const aT = activityTypesObj[activity.activityType];
      // if any reactive dashboards, start subscribing to reactive data
      if (
        aT.dashboards &&
        values(aT.dashboards).some(x => x.reactiveToDisplay)
      ) {
        Meteor.call('ensure.dashboard.reactive.subscription', activity._id);
      }
      Activities.update(
        {
          _id: activityId,
          actualStartingTime: { $exists: false }
        },
        {
          $set: { actualStartingTime: new Date() }
        }
      );
    });
  }
  Sessions.update(sessionId, {
    $set: {
      openActivities,
      timeInGraph,
      state: timeInGraph === -1 ? 'READY' : 'STARTED'
    }
  });
};

export const removeSession = (sessionId: string) =>
  Meteor.call('flush.session', sessionId);

// if slug is empty, will automatically generate a unique slug, returns sessionId
export const addSessionFn = (graphId: string, slug?: string): string => {
  if (Meteor.isServer) {
    const validOutput = valid(
      Activities.find({ graphId }).fetch(),
      Operators.find({ graphId }).fetch(),
      Connections.find({ graphId }).fetch()
    );
    if (validOutput.errors.filter(x => x.severity === 'error').length > 0) {
      console.warn('Broken graph', validOutput);
      Graphs.update(graphId, { $set: { broken: true } });
      return 'invalidGraph';
    }

    const sessionId = uuid();
    const graph = Graphs.findOne(graphId);
    const activities = Activities.find({ graphId }).fetch();

    const copyGraphId = addGraph({
      graph: { ...graph, sessionGraph: true, name: graph.name },
      activities,
      operators: Operators.find({ graphId }).fetch(),
      connections: Connections.find({ graphId }).fetch()
    });

    let newSlug = slug;
    if (!slug) {
      let slugSize = 4;
      const slugs = Sessions.find({}, { fields: { slug: 1 } })
        .fetch()
        .map(x => x.slug);
      newSlug = getSlug(slugSize);
      while (slugs.includes(newSlug)) {
        newSlug = getSlug(slugSize);
        slugSize += 1;
      }
    }

    Sessions.insert({
      _id: sessionId,
      fromGraphId: graphId,
      name: graph.name,
      graphId: copyGraphId,
      state: 'CREATED',
      ownerId: Meteor.userId(),
      timeInGraph: -1,
      countdownStartTime: -1,
      countdownLength: DEFAULT_COUNTDOWN_LENGTH,
      pausedAt: null,
      openActivities: [],
      slug: newSlug,
      uiStatus: 'active'
    });
    updateNextOpenActivities(sessionId, -1, activities);
    Graphs.update(copyGraphId, { $set: { sessionId } });

    setTeacherSession(sessionId);
    runSessionFn(sessionId);
    return sessionId;
  }
  return '';
};

Meteor.methods({
  'add.session': addSessionFn,
  'flush.session': sessionId => {
    const session = Sessions.findOne(sessionId);
    if (!session) {
      return;
    }
    const graphId = session.graphId;
    Sessions.remove(sessionId);
    Graphs.remove(graphId);
    Activities.remove({ graphId });
    Operators.remove({ graphId });
    Connections.remove({ graphId });
  },
  'set.timeout': (delay, id) => {
    if (Meteor.isServer) {
      const callback = () => {
        updateSessionCountdownStartTime(id, -1);
        updateSessionCountdownLength(id, DEFAULT_COUNTDOWN_LENGTH);
        runNextActivity(id);
      };
      SessionTimeouts[id] = Meteor.setTimeout(callback, delay);
    }
    return null;
  },
  'clear.timeout': id => {
    if (Meteor.isServer) {
      Meteor.clearTimeout(SessionTimeouts[id]);
    }
    return null;
  }
});
