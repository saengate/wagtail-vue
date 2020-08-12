import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    BootstrapVue,
    IconsPlugin,
    BootstrapVueIcons,

} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(
    FlagIcon,
    VueAxios,
    axios,
    BootstrapVue,
    IconsPlugin,
    BootstrapVueIcons,
)
Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
