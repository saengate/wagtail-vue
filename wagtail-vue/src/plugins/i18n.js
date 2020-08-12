import Vue from 'vue';
import VueI18n from 'vue-i18n';


Vue.use(VueI18n);

const messages = {
    'en': {
        head: 'Hello stranger! Welcome to my website.',
        hello: 'This is my Vue.js App.',
        foot: 'Created by SaenGate.',
    },
    'es': {
        head: '¡Hola extraño! Bienvenido a mi sitio web.',
        hello: 'Esta es mi aplicación Vue.js',
        foot: 'Creado por SaenGate.',
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