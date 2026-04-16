import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.vscode/**',
      '.idea/**',
      'coverage/**',
      '*.log',
      '.DS_Store',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },
]
