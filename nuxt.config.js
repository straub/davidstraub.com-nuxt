export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'David Straub: Leader, Engineer, & Architect',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'David Straub is an Agile team leader and full stack ' +
        'web engineer located in the Metro Detroit Area of Michigan, USA.'
      },
      { hid: 'author', name: 'author', content: 'David Straub' },
      { hid: 'copyright', name: 'copyright', content: 'Copyright (c) 2008-present David M. Straub. All Rights Reserved.' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'david straub, david michael straub, straub, web engineer, web developer, software engineer, end to end web engineer, end to end developer, full stack engineer, full stack developer'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'yEJtzso-1g42i96pRvONZWxwn8CskObw3d5klenga7A'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@csstools/normalize.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/axe.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-fonts.nuxtjs.org/
    ['@nuxtjs/google-fonts', {
      families: { Lora: [400] },
      display: 'fallback',
      useStylesheet: true,
      download: true
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Server configuration - https://nuxtjs.org/faq/host-port/
  server: {
    // default port: 3000,
    host: '172.17.0.1' // docker0
  },

  render: {
    // Keeps site light until I'm using JS.
    injectScripts: process.env.NODE_ENV === 'development'
  }
}
