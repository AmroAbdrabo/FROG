import React, { Component } from 'react';
import Stringify from 'json-stringify-pretty-compact';
import uuid from 'cuid';
import PostIframe from './PostIframe';
import './App.css';

const quizConfig = {
  guidelines:
    "Ce Quizz est anonyme, pas noté et ne compte donc en aucun cas pour la note à l'examen final. Une seule réponse est correcte par question. Si vous ne connaissez pas la réponse, répondez NA.",
  questions: [
    {
      question: 'Laquelle de ces expressions est fausse?',
      answers: [
        {
          choice:
            'Pour une variable discrète, le nombre de valeurs possibles est dénombrable.'
        },
        {
          choice: 'Les échelles nominales sont des échelles non ordonnées.'
        },
        {
          choice: "Une échelle de rapport est une échelle d'intervalle."
        },
        {
          choice:
            'La mesure de la température est forcément sur une échelle de rapport.'
        },
        { choice: 'NA' }
      ]
    }
  ]
};

const srcs = [
  [
    'Brainstorm',
    'http://localhost:3000/api/activityType/ac-brainstorm',
    {
      config: {
        allowCreate: true,
        specificLI: true,
        liType: 'li-image',
        allowGeneralLI: true
      },
      instanceId: 11
    }
  ],
  [
    'Chat',
    'http://localhost:3000/api/activityType/ac-chat',
    {
      instanceId: 11
    }
  ],
  [
    'Quiz',
    'http://localhost:3000/api/activityType/ac-quiz',
    {
      config: quizConfig,
      instanceId: 12
    }
  ],
  [
    'Quiz read-only',
    'http://localhost:3000/api/activityType/ac-quiz',
    {
      config: quizConfig,
      instanceId: 12,
      readOnly: true
    }
  ],
  [
    'Quiz dashboard',
    'http://localhost:3000/api/dashboard/ac-quiz',
    {
      config: quizConfig,
      instanceId: 11
    }
  ],
  [
    'Quiz with activityData - completed',
    'http://localhost:3000/api/activityType/ac-quiz',
    {
      config: quizConfig,
      rawData: {
        justification: '',
        form: { '0': 0 },
        coordinates: { x: 0, y: 0, valid: true },
        completed: true
      },
      readOnly: true,
      instanceId: 12
    }
  ],
  [
    'CK-board quadrants',
    'http://localhost:3000/api/activityType/ac-ck-board',
    {
      config: {
        quadrants: true,
        quadrant1: 'Constructivism',
        quadrant2: 'Behaviourism',
        quadrant3: 'Socio-cognitive',
        quadrant4: 'Connectivism',
        allowCreate: true
      },
      instanceId: 13
    }
  ],
  [
    'CK-board quadrants (instance 2)',
    'http://localhost:3000/api/activityType/ac-ck-board',
    {
      config: {
        quadrants: true,
        quadrant1: 'Constructivism',
        quadrant2: 'Behaviourism',
        quadrant3: 'Socio-cognitive',
        quadrant4: 'Connectivism',
        allowCreate: true
      },
      instanceId: 15
    }
  ],
  [
    'Choose activity',
    'http://localhost:3000/api/chooseActivity',
    { showLibrary: true }
  ],
  [
    'Choose activity, with whiteList',
    'http://localhost:3000/api/chooseActivity',
    {
      whiteList: ['ac-quiz', 'ac-chat', 'ac-brainstorm', 'ac-ck-board'],
      showDelete: true
    }
  ],
  [
    'Configure quiz',
    'http://localhost:3000/api/config/ac-quiz',
    { showDelete: true }
  ],
  [
    'Configure quiz, with validator',
    'http://localhost:3000/api/config/ac-quiz',
    { showValidator: true }
  ],
  [
    'Configure quiz with pre-loaded data',
    'http://localhost:3000/api/config/ac-quiz',
    { config: quizConfig, showValidator: true, showDelete: true }
  ]
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { logs: [], example: 0, valid: undefined, uuid: '' };
  }
  componentDidMount = () => {
    var eventMethod = window.addEventListener
      ? 'addEventListener'
      : 'attachEvent';
    var eventer = window[eventMethod];
    var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
    eventer(messageEvent, e => {
      console.log(e.data);
      if ((e.data && e.data.type === 'frog-log') || e.data.type === 'h5p-log') {
        this.setState({ logs: [...this.state.logs, e.data] });
      }
      if (e.data && e.data.type === 'frog-config') {
        this.setState({
          aT: e.data.activityType,
          config: e.data.config,
          valid: e.data.valid,
          errors: e.data.errors
        });
      }
      if (e.data && e.data.type === 'frog-data') {
        this.setState({ data: e.data.msg });
      }
      if (e.data && e.data.type === 'frog-data-transformed') {
        this.setState({ dataTransformed: e.data.msg });
      }
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="App-title">FROG API test bed</h1>
        <a href="#" onClick={() => this.setState({ uuid: uuid() })}>
          Reload
        </a>
        <br />
        Examples:{' '}
        {srcs.map(([title, x], i) => (
          <span key={title}>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                this.setState({
                  setConfig: undefined,
                  example: i,
                  url: undefined,
                  valid: undefined,
                  errors: i < 6 ? undefined : [],
                  config: undefined,
                  logs: [],
                  activityType: undefined,
                  data: undefined
                });
              }}
            >
              {title}
            </a>
            {' / '}
          </span>
        ))}
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <div>
            <i>
              URL:{' '}
              {(this.state.url || srcs[this.state.example][1] || '').slice(
                0,
                100
              )}
              ...
            </i>
            <br />
            <PostIframe
              allow="microphone *; camera *"
              width={900}
              height={400}
              src={this.state.url || srcs[this.state.example][1]}
              params={{
                ...(this.state.setConfig || srcs[this.state.example][2]),
                clientId: this.state.uuid
              }}
            />
          </div>
          <div style={{ textAlign: 'left', marginLeft: '20px' }}>
            {Array.isArray(this.state.errors) ? (
              <div>
                <h3>Config data</h3>
                <b>Activity type</b>: {this.state.aT}
                <br />
                <b>Valid?</b>:{' '}
                {this.state.valid ? (
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      this.setState({
                        setConfig: {
                          config: this.state.config,
                          instanceId: 11
                        },
                        url:
                          'http://localhost:3000/api/activityType/' +
                          this.state.aT,
                        valid: undefined,
                        errors: undefined,
                        config: undefined,
                        logs: [],
                        activityType: undefined,
                        data: undefined
                      });
                    }}
                  >
                    Load activity
                  </a>
                ) : (
                  'No'
                )}
                <br />
                <b>Errors</b>: {JSON.stringify(this.state.errors)}
                <br />
                <b>Config</b>: {JSON.stringify(this.state.config)}
                <br />
              </div>
            ) : (
              <div>
                {this.state.data && <h3>Data</h3>}
                <pre> {Stringify(this.state.data)}</pre>
                {this.state.data && <h3>Data transformed</h3>}
                <pre> {Stringify(this.state.dataTransformed)}</pre>
                <h3>Logs</h3>
                <div
                  style={{
                    overflowY: 'scroll',
                    height: '440px',
                    display: 'flex',
                    flexDirection: 'column-reverse'
                  }}
                >
                  {this.state.logs
                    .slice(-30)
                    .reverse()
                    .map(x => (
                      <div key={x.id}>
                        <pre>{Stringify(x.msg)}</pre>
                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
