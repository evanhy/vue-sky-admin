import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin() {
  return viteMockServe({
    mockPath: 'mock/modules', // 指定mock数据文件夹，默认为mock
    localEnabled: true, // 是否开启本地mock，默认为false
    prodEnabled: false, // 是否开启生产mock，默认为false
    injectCode: `
      import { setupProdMockServer } from '../mock';
      setupProdMockServer();
    `,
    logger: false,
  })
}
