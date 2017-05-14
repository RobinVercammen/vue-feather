import * as api from '../api';
import * as mutations from './mutation-types';

export const getAllMessages = ({ commit }) => {
  api.getAllMessages().then(messages => {
    commit(mutations.RECEIVE_ALL, {
      messages,
    });
  });
};

export const sendMessage = ({ commit }, payload) => {
  api.createMessage(payload).then(message => {
    commit(mutations.RECEIVE_MESSAGE, {
      message,
    });
  });
};

export const switchThread = ({ commit }, payload) => {
  commit(mutations.SWITCH_THREAD, payload);
};
