import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', 'src/**/*.vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/html-self-closing': 'off'
  },
  plugins: {
    'plugin:prettier/recommended': {}
  }
})
