// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxt/eslint', 'nuxt-translation-manager', '@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      app: {
        name: '',
        protocol: '',
        host: '',
        port: '',
        url: ''
      }
    },
    backend: {
      apiKey: ''
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en-US.json',
        isCatchallLocale: true
      },
      {
        code: 'es',
        iso: 'es',
        name: 'Español',
        file: 'es-ES.json'
      },
      {
        code: 'ca',
        iso: 'ca',
        name: 'Català',
        file: 'ca-ES.json'
      }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    dynamicRouteParams: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'app_i18n',
      redirectOn: 'root',
      alwaysRedirect: true
    },
    compilation: {
      strictMessage: false
    }
  }
})
