import {
    I18N,
} from './config'

export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    server: {
        port: 80, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: 'favicon.ico'
        }]
    },
    /*
     ** Global CSS
     */
    css: [
        '~/assets/scss/custom.scss'
    ],
    styleResources: {
        scss: [
            '~/assets/scss/custom.scss',
        ]
    },
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        // '~/plugins/wagtailFormat',
        {
            src: '~/plugins/globals',
            mode: 'client'
        },
        "~/plugins/vee-validate",
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        ['bootstrap-vue/nuxt', {
            icons: true,
            bootstrapCSS: false,
            bootstrapVueCSS: false,
        }],
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        ['nuxt-i18n', I18N],
        '@nuxtjs/style-resources',
    ],
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader', ],
        }, ],
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     * Remover process.env.BASE_URL para el pase a producción
     */
    axios: {
        baseURL: process.env.BASE_URL || 'https://w3pu9fr8oe.execute-api.us-east-1.amazonaws.com/production',
        retry: {
            retries: 3
        },
        publicRuntimeConfig: {
            axios: {
                browserBaseURL: process.env.BASE_URL || 'https://w3pu9fr8oe.execute-api.us-east-1.amazonaws.com/production'
            }
        },
        privateRuntimeConfig: {
            axios: {
                baseURL: process.env.BASE_URL || 'https://w3pu9fr8oe.execute-api.us-east-1.amazonaws.com/production'
            }
        },
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        transpile: ["vee-validate/dist/rules"],
        extractCSS: true,
        extend(config, ctx) {}
    }
}
