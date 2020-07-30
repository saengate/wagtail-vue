import Vue from 'vue';
import VueI18n from 'vue-i18n';


Vue.use(VueI18n);

const messages = {
    'en': {
        hello: 'Welcome to Your Vue.js App',
        head: 'Welcome to my website!'
},
'es': {
        hello: 'Bienvenido a tu aplicación Vue.js',
        head: '¡Bienvenido a mi sitio web!'
    }
};

const i18n = new VueI18n(
    {
        locale: 'es', // set locale
        fallbackLocale: 'en', // set fallback locale
        messages, // set locale messages
    }
);

export default i18n