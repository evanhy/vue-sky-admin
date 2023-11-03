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
> 本项目 commit 必须遵循下面的规范

+ feat: 新增功能
+ fix: 修复bug
+ docs: 文档更新
+ style:  代码格式修改
+ refactor:  重构代码
+ test:  测试用例修改
+ build:  构建系统或包依赖修改
+ ci:  CI/CD 配置修改
+ chore:  其他杂项修改
+ revert:  回滚到上一版本
+ perf:  性能优化

### rollup-plugin-visualizer
> 打包检测

### vite-plugin-mock
> mock数据

### 命名规范
> 本项目命名必须遵循下面的规范

| 类型       | 命名规范       | 举例           |
|----------|------------|--------------|
| 文件名      | snake_case | user_info.ts |
| 变量名      | camelCase  | userInfo     |
| 常量名      | UPPER_CASE | USER_INFO    |
| 组件名/文件夹名 | PascalCase | UserInfo.vue |
| css类名    | kebab-case | user-info    |
