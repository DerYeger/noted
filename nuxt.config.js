import app from './app.config'
import i18n from './locales/i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Noted',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['prism-theme-vars', '~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/host' },
    { src: '~/plugins/marked' },
    { src: '~/plugins/masonryWall' },
    { src: '~/plugins/persistedState.client' },
    { src: '~/plugins/pwaUpdate.client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms/',
    '~/components/molecules/',
    '~/components/organisms/',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',
    // https://github.com/ivodolenc/nuxt-font-loader
    'nuxt-font-loader',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    host: app.host,
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
  },

  fontLoader: {
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap',
    prefetch: true,
    preconnect: true,
  },

  i18n: {
    baseUrl: app.host,
    defaultLocale: 'en',
    noPrefixDefaultLocale: false,
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
    ],
    vueI18n: i18n,
  },

  loading: {
    color: app.theme.primaryColor,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: app.name,
      short_name: app.name,
    },
    meta: {
      name: app.name,
      ogImage: `${app.host}/og-logo.png`,
      ogHost: app.host,
      theme_color: app.theme.primaryColor,
      twitterCard: 'summary_large_image',
      twitterCreator: '@DerYeger',
      twitterSite: '@DerYeger',
    },
    icon: {},
  },

  sitemap: {
    gzip: true,
    hostname: app.host,
    i18n: true,
    trailingSlash: true,
  },
}
