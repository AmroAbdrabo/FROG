// @flow

import * as React from 'react';
import { Modal, type ActionsT } from './Modal';

type AlertModalPropsT = {
  title: string,
  content: string,
  actions: ActionsT
};

/** Displays a simple modal, consisting of a title and content, plus a couple actions */
export const AlertModal = (props: AlertModalPropsT) => (
  <Modal
    title={props.title}
    actions={hideModal =>
      props.actions.map(action => ({
        ...action,
        callback: () => {
          action.callback();
          hideModal();
        }
      }))
    }
  >
    {props.content}
  </Modal>
);
