import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin() {
  return viteMockServe({
    mockPath: 'mock/modules', // 指定mock数据文件夹，默认为mock
    localEnabled: true, // 是否开启本地mock，默认为false
    prodEnabled: true, // 是否开启生产mock，默认为false 这样可以控制关闭mock的时候不让mock打包到最终代码内
    injectCode: `
      import { setupProdMockServer } from '../mock';
      setupProdMockServer();
    `,
    logger: false,
  })
}
