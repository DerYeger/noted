module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
