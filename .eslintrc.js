module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    '@typescript-eslint',
    'react-hooks',
  ],
  ignorePatterns: ['package.json', 'env.json'],
  rules: {
    'jsx-a11y/label-has-associated-control': [2, { controlComponents: ['TextInput'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'react/jsx-props-no-spreading': [1, {
      html: 'ignore',
      custom: 'enforce',
      exceptions: [''],
    }],
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-restricted-imports': ['warn', {
      paths: [{
        name: 'react',
        importNames: ['default'],
        message: 'Import not necessary',
      }],
    }],
  },
  overrides: [
    { files: ['*.jsx', '*.js'], rules: { 'no-undef': 'error' } },
    {
      files: ['db.json'],
      rules: {
        quotes: 0, 'no-unused-expressions': 0, 'quote-props': 0, 'comma-dangle': 0,
      },
    },
  ],
};
