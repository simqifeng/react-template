react-template
=======
react-template 是一个基于 React 的项目模板。集成了 react-router, redux, react-loadable, postcss。

## 目录

- react-template
    + 目录
    + 安装
    + 模板的结构
    + 运行
    + 开发说明
        * 数据状态管理 及 router
        * 组件资源按需打包加载
        * css 预编译
        * 数据请求
        * 引入的 polyfills


## 安装

您可以通过 [smarter](https://github.com/jd-smart-fe/smarter)

脚手架生成工具来安装该模板：
```
$ sudo npm i -g smarter                         # 全局安装 smarter
$ smarter init react-template my-project        # 生成项目到 my-project 目录下
$ cd my-project/                                # 进入到 my-project 目录
$ npm i                                         # 使用 npm 安装项目的依赖
```

或者直接 clone 该项目：
```
$ git clone https://github.com/simqifeng/react-template
$ cd react-template
$ rm -rf .git && git init                             # 重新初始化 git 库
$ npm  i                                              # 使用 npm 安装项目的依赖
```

## 模板的结构目录

```
.
├── config                    # Webpack 配置
├── public                    # html 模板
├── scripts                   # 项目启动文件
├── src                       # 项目开发文件主目录
│   ├── components            # 公共组件目录
│   ├── fetch                 # 网络请求目录
│   ├── images                # 页面中 <img> 标签使用的图片
│   ├── libs                  # 公共 js 资源
│   ├── pages                 # 业务组件目录
│   ├── redux                 # redux
│   │   ├── actions           # redux 的 action 文件
│   │   ├── reducers          # redux 的 action 文件
│   │   └── index.js          # redux 的入口
│   ├── styles                # 公共的 css 文件
│   ├── App.js                # App 组件
│   ├── index.js              # 入口文件
│   └── Loading.jsx           # 两个按需加载组件跳转之间的 loading
├── package.json              # package.json
└── README.md                 # readme
```

## 运行


```
# 启动项目
npm start / npm run dev

# 构建项目
npm run build
```

`npm run build` 会将资源打包到 `./buid/` 文件夹下。

构建打包使用了 **版本号** 的概念，也就是 `css` `js` 等页面中引用的静态资源所在的文件夹的名字是一个 `${staticVersion}/` ，这里的变量
`${staticVersion}` 是取自 `./package.json` 里的 `version` 的值。比如
`./package.json` 的 `version` 值为 `0.1.0` ，打包出来的静态资源路径会是这样
`./build/0.1.0/js/main.js` 。

## 开发说明

本模板是在 `create-react-app` 生成的模板的基础上结合我们在项目中常用的配置进行修改而成。

### src 文件结构
- **components** 目录存放公共组件 像 `loading`, `toast` 等这类组件。
- **pages** 目录存放公共组件以外的其他组件。
- **libs** 公共 js， 如 `Zepto.js` 自己封装的工具集 `utils.js` 这种。
- **images** 页面中使用的 images。
- **styles** 放一些 css 文件。
- **redux** redux。
- **fetch** 异步数据请求方法可以集中在这里，方便管理。

### 数据状态管理 及 router

使用 [redux](https://redux.js.org) 进行状态管理，
使用 [react-router](https://github.com/ReactTraining/react-router) 路由分发。

### 组件资源的按需打包加载

使用 [react-loadable](https://github.com/jamiebuilds/react-loadable) 插件实现组件资源的按需打包加载：

```
import Loadable from 'react-loadable';
import Loading from './Loading';
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});
export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
```

按需打包加载在页面较多时非常有用。

### css 预编译

`css` 支持 [precss](https://github.com/jonathantneal/precss)
如果要使用 `Sass` `Less` 请自行添加配置。

### 数据请求

使用 `fetch` 进行异步数据接口请求，为方便管理，我们可以把这些异步请求整合在一个或几个 js 文件里，目录中有一个默认的 `fetch.js` 封装了几个在使用 fetch 请求时处理参数及配置项的方法。

本地开发时，模拟请求的 mock 数据，可以结合使用 [smarter](https://github.com/jd-smart-fe/smarter) 的 `mock` 功能：
```
smarter mock
```

使用 `smarter mock` 启用一个本地服务后，在 `fetch.js` 里修改 `process.env.NODE_ENV === 'development'` 的 `CONFIG.API_PREFIX` 为 smarter mock 服务的地址及端口号。

### 引入的 polyfills

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

