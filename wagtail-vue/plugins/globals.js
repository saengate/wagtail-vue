import Vue from 'vue'
import Vuelidate from 'vuelidate'
import FlagIcon from 'vue-flag-icon'
import {
    BootstrapVue,
    IconsPlugin,
    BootstrapVueIcons,

} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(
    FlagIcon,
    BootstrapVue,
    IconsPlugin,
    BootstrapVueIcons,
    Vuelidate,
)
Vue.config.productionTip = false
