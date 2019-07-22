// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import lodash from "lodash"
import FastClick from "fastclick";
import {AjaxPlugin} from 'vux'


Vue.use(AjaxPlugin);
FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.prototype.$lodash = lodash;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});


router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true});
  next()
});

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
});

