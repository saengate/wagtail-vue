import en from '../lang/en-US.js'
import es from '../lang/es-CL.js'

export const I18N = {
    lazy: true,
    strategy: 'no_prefix',
    locales: [{
            name: 'Español',
            code: 'es',
            iso: 'es-CL',
            file: 'es-CL.js',
        },
        {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
        },
    ],
    defaultLocale: 'es',
    routes: {
        contact: {
            es: '/contacto',
            en: '/contact'
        },
    },
    vueI18n: {
        fallbackLocale: 'es',
        messages: {
            en,
            es
        }
    }
}
