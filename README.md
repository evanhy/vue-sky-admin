# vue-sky-admin


[文档地址](https://earnest-sorbet-6777f5.netlify.app/)

> Vue3 + Ts + Element Plus + Vite + Unocss + Vue Router

+ `unplugin-auto-import` - 直接使用 Composition API 等，无需导入
+ `unplugin-vue-components` - 自动加载组件
+ `unplugin-vue-macros` - 探索并扩展更多的宏和语法糖到 Vue 中

### unplugin-auto-import
> 自动导入模块
> [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

### unplugin-vue-components
> 自动导入组件
> [unplugin-vue-components](https://github.com/antfu/vite-plugin-components)


### taze
[antfu-taze](https://github.com/antfu/taze)
> 将项目中的依赖包升级到最新版本

```bash
pnpm run up
```

### lint-staged
[okonet/lint-staged](https://github.com/okonet/lint-stagedhttps://github.com/okonet/lint-staged)
> 在git commit之前，执行eslint

### husky
> git hooks 工具
> 主要作用在于提交代码前为我们做一些事情，如格式化、检查提交规范等（需要先初始化git）

### commitlint
> 提交代码时的规范名称检查


### commmit规范

+ feat: 新特性
+ fix: 修改问题
+ refactor: 代码重构
+ docs: 文档修改
+ style: 代码格式修改, 注意不是 css 修改
+ test: 测试用例修改
+ chore: 其他修改, 比如构建流程, 依赖管理.
