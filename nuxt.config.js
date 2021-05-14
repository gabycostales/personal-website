export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gaby Costales',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Space+Mono:ital@0;1&display=swap',
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/events.js', mode: 'client'},
    {src: '~/plugins/viewport.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    ['@nuxtjs/fontawesome', {
      addCss: false,
      icons: {
        regular: ['faMoon'],
        solid: ['faMoon', 'faPalette', 'faEnvelope'],
        brands: ['faTwitter', 'faLinkedinIn', 'faGithub'],
      }
    }],
  ],

  // Style Resources
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['three/examples/jsm/controls/OrbitControls.js']
  }
}
