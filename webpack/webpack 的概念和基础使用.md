# webpack 的概念和基础使用

我们在小册介绍中提到，webpack 是一个 JS 代码模块化的打包工具，藉由它强大的扩展能力，随着社区的发展，逐渐成为一个功能完善的构建工具。相信开始学习这个小册的同学们多多少少都能够理解为什么前端开发中会使用到 webpack，我们不再详细介绍 webpack 的使用背景，直奔本小节的主题。


安装和使用
我们使用 npm 或者 yarn 来安装 webpack，可以作为一个全局的命令来使用：

npm install webpack webpack-cli -g 

## 或者

yarn global add webpack webpack-cli

## 然后就可以全局执行命令了

webpack --help

webpack-cli 是使用 webpack 的命令行工具，在 4.x 版本之后不再作为 webpack 的依赖了，我们使用时需要单独安装这个工具。

在项目中，我们更多地会把 webpack 作为项目的开发依赖来安装使用，这样可以指定项目中使用的 webpack 版本，更加方便多人协同开发：

确保你的项目中有 package.json 文件，如果没有可以使用 npm init 来创建。

npm install webpack -D 

## 或者
yarn add webpack -D

这样 webpack 会出现在 package.json 中，我们再添加一个 npm scripts：

  "scripts": {
    "build": "webpack --mode production"
  },
  "devDependencies": {
    "webpack": "^4.1.1",
    "webpack-cli": "^2.0.12",
  }
  
然后我们创建一个 ./src/index.js 文件，可以写任意的 JS 代码。创建好了之后执行 npm run build 或者 yarn build 命令，你就会发现新增了一个 dist 目录，里边存放的是 webpack 构建好的 main.js 文件。

因为是作为项目依赖进行安装，所以不会有全局的命令，npm/yarn 会帮助我们在当前项目依赖中寻找对应的命令执行，如果是全局安装的 webpack，直接执行 webpack --mode production 就可以。

webpack ...
