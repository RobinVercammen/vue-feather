import * as types from './mutation-types';

export const state = {
  messages: [],
};

export const mutations = {
  [types.ADD_MESSAGE](state, message) {
    state.messages.push(message);
  },
  [types.SET_MESSAGES](state, messages) {
    state.messages = messages;
  },
};
