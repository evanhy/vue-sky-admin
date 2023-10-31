import antfu from '@antfu/eslint-config'
import plugin from '@unocss/eslint-plugin'

export default antfu(
  {
    ignores: [],
  },
  {
    plugins: {
      '@unocss': plugin,
    },
    rules: plugin.configs.recommended.rules,
  },
  {
    rules: {
      'no-console': 'off',
      'antfu/top-level-function': 'off',
      'node/prefer-global/process': 'off',
      'prefer-promise-reject-errors': 'off',
    },
  },
)
