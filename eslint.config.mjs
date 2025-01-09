// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true,
    formatters: {
      css: true,
    },
    rules: {
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      }],
      'require-await': 'error',
      'no-empty-function': 'error',
      'no-func-assign': 'error',
      'n/prefer-global/process': ['off'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/multi-word-component-names': ['error'],
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
        },
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'ignore',
          multiline: 'below',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: { max: 1 },
          multiline: { max: 1 },
        },
      ],
    },
  },
  {
    files: [
      'src/views/**/*.vue',
      'src/layouts/*.vue',
      'src/components/**/**/*.vue',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
