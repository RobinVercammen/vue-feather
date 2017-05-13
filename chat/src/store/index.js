import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations } from './mutations';
import { actions } from './actions';
import logger from './plugins/logger';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: debug ? [logger] : [],
});
