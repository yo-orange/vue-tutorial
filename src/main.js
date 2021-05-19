import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// https://v3.ja.vuejs.org/api/application-api.html
createApp(App)
    .use(VueAxios, axios)
    .mount('#app')
