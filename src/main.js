// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VConsole from 'vconsole';
import ElementUI from 'element-ui'
import * as echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import Bridge from './common/public/bridge.js';
import service from './common/public/request.js';

Vue.config.productionTip = false

new VConsole();
Vue.use(Bridge);
Vue.use(ElementUI);
Vue.prototype.$http = service;
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
