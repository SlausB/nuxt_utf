require('dotenv').config({})
import fs from 'fs'

let config = {
    server : {
    },

    mode: 'spa',
    target: 'static',

    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
        ],
    },
    /*
     ** Global CSS
     */
    css: [
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: [
        { path: '~/components', pathPrefix:false },         
    ],    
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    ],
    env: process.env,
    /*
     ** Nuxt.js modules
     */
    modules: [
        ['nuxt-i18n'],
    ],

    i18n: {
        //https://i18n.nuxtjs.org/routing.html#strategy
        //https://codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/i18n?from-embed=&file=/middleware/i18n.js            
        locales: [
            {                    
                code: 'en',
                code3: 'eng',
                file: 'en.json',
                name: "English",
            },
            {
                code: 'ru',
                code3: 'rus', 
                file: 'ru.json',
                name: "Русский",
            },
        ],
        strategy: 'no_prefix',
        //strategy: 'prefix_and_default',
        vueI18n: {
            fallbackLocale: 'en',
        },
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales/',        
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
        },
        vuex: {
            moduleName: 'i18n',
            syncLocale: true,
        },
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        
        extend(config, ctx) {
            if (ctx.isDev || process.env.KEEP_SOURCE_MAP ) {
                // source-map see https://medium.com/js-dojo/debugging-nuxt-js-with-vs-code-60a1a9e75cf6
                config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
                console.log("DEVTOOL = ", config.devtool);
            }
            if (ctx.isClient) {
                config.optimization.splitChunks.maxSize = 200000;
            }
        },
        stylus: {

        },

        babel: {
            plugins: [
                ['@babel/plugin-proposal-private-methods', { loose: true }]
            ],
            // form https://stackoverflow.com/questions/57539138/how-to-configure-nuxt-2-8-to-generate-es5-compatible-code
            // see http://css3please.com/
            presets: [
                [
                    require.resolve("@nuxt/babel-preset-app"),
                    {
                        browsers: ["IE 11", "last 2 version"]
                    }
                ]
            ]
        }
    },

    router: {    
        base: process.env.APP_CONTEXT || "",
        mode: 'hash'
    },

    axios: {
        // proxyHeaders: false
    },

    vue : {
        config : {
            productionTip : false,
            devtools : true,
        },
    },
}

export default config;