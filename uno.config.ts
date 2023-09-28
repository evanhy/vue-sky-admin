import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      // fonts: {
      //   sans: 'DM Sans',
      //   serif: 'DM Serif Display',
      //   mono: 'DM Mono',
      // },
    }),
  ],
  transformers: [transformerDirectives()],
  content: {
    pipeline: {
      // 解决动态图标无法显示的问题 https://unocss-study-examples.netlify.app/#/CSSIcon
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/router/**/*.ts',
      ],
    },
  },
  shortcuts: {
    'flex-c': 'flex justify-center items-center',
    'flex-bc': 'flex justify-between items-center',
  },
  rules: [
    [
      // 多行文本超出部分省略号 line-n
      /^line-(\d+)$/,
      ([, l]) => {
        if (~~l === 1) {
          return {
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
            'width': '100%',
          }
        }
        return {
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': l,
        }
      },
    ],
  ],
})
