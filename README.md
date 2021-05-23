#### 简介

使用webpack搭建的一个简易 Vue 框架

### 目录架构
 |---.gitignore  #git忽略文件
 |---babel.config.json  #babel配置文件  
 |---webpack.config.js  #webpack配置文件
 |---.eslintrc.json     #eslint 配置文件 可配置eslint报错拦截信息
 |---public  #公共文件
 |---src
    |--- asset #静态资源文件
    |--- css  #样式文件
    |---main.js  #入口文件
    |--App.vue  # vue组件

### 具体功能
+ eslint功能
+ 热更新
+ js/jsx/ts代码兼容
+ 图片引入
+ sass

```
npm run build  项目打包    
npm run serve  本地服务
```
