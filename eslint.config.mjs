// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': 'off'
  },
  plugins: {
    ...eslintPluginPrettierRecommended.plugins
  }
})
