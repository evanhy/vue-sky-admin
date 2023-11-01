import type { ProxyOptions } from 'vite'

export const PROXY_CONFIG: Record<string, string | ProxyOptions> | undefined = {
  // '^/api/.*': {
  //   target: 'http://localhost:3000',
  //   changeOrigin: true,
  //   rewrite: path => path.replace(/^\/api/, ''),
  // },
}
