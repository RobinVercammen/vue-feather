// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import * as api from './api';
import filters from './filters';
import store from './store';
import { getAllMessages } from './store/actions';
import { RECEIVE_MESSAGE } from './store/mutation-types';

Vue.config.productionTip = false;

Vue.filter('time', filters.time);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});

api.subscribe(message => store.commit(RECEIVE_MESSAGE, { message }));

getAllMessages(store);
