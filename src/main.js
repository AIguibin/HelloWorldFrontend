/**
 * @Author AIguibin
 * @Datetime 2023/1/23 15:20
 * @Description TODO
 */

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import ALElement from '@/components/ALElement/index.js'


const application=createApp(App);
application.use(router);
application.use(ALElement);
application.mount('#app');
