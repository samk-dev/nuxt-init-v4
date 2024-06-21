// import en from './src/locales/en-US.json'
// import es from './src/locales/es-ES.json'
// import ca from './src/locales/ca-ES.json'

export default defineI18nConfig((/* nuxt */) => {
  return {
    legacy: false,
    fallbackLocale: 'en'
    // messages: {
    //   en,
    //   es,
    //   ca
    // }
  }
})
