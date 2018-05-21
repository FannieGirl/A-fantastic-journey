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
  
# 入口
 
如上图所示，在多个代码模块中会有一个起始的 .js 文件，这个便是 webpack 构建的入口。webpack 会读取这个文件，并从它开始解析依赖，然后进行打包。如图，一开始我们使用 webpack 构建时，默认的入口文件就是 ./src/index.js。...

然后我们创建一个 ./src/index.js 文件，可以写任意的 JS 代码。创建好了之后执行 npm run build 或者 yarn build 命令，你就会发现新增了一个 dist 目录，里边存放的是 webpack 构建好的 main.js 文件。
入口可以使用 entry 字段来进行配置，webpack 支持配置多个入口来进行构建：

module.exports = {
  entry: './src/index.js' 
}

// 上述配置等同于
module.exports = {
  entry: {
    main: './src/index.js'
  }
}

// 或者配置多个入口
module.exports = {
  entry: {
    foo: './src/page-foo.js',
    bar: './src/page-bar.js', 
    // ...
  }
}

// 使用数组来对多个文件进行打包
module.exports = {
  entry: {
    main: [
      './src/foo.js',
      './src/bar.js'
    ]
  }
}
最后的例子，可以理解为多个文件作为一个入口，webpack 会解析两个文件的依赖后进行打包。...

# loader
webpack 中提供一种处理多种文件格式的机制，便是使用 loader。我们可以把 loader 理解为是一个转换器，负责把某种文件格式的内容转换成 webpack 可以支持打包的模块。

举个例子，在没有添加额外插件的情况下，webpack 会默认把所有依赖打包成 js 文件，如果入口文件依赖一个 .hbs 的模板文件以及一个 .css 的样式文件，那么我们需要 handlebars-loader 来处理 .hbs 文件，需要 css-loader 来处理 .css 文件（这里其实还需要 style-loader，后续详解），最终把不同格式的文件都解析成 js 代码，以便打包后在浏览器中运行。

当我们需要使用不同的 loader 来解析处理不同类型的文件时，我们可以在 module.rules 字段下来配置相关的规则，例如使用 Babel 来处理 .js 文件：

module: {
  // ...
  rules: [
    {
      test: /\.jsx?/, // 匹配文件路径的正则表达式，通常我们都是匹配文件类型后缀
      include: [
        path.resolve(__dirname, 'src') // 指定哪些路径下的文件需要经过 loader 处理
      ],
      use: 'babel-loader', // 指定使用的 loader
    },
  ],
}
# loader 是 webpack 中比较复杂的一块内容，它支撑着 webpack 来处理文件的多样性。后续我们还会介绍如何更好地使用 loader 以及如何开发 loader。...

# plugin
在 webpack 的构建流程中，plugin 用于处理更多其他的一些构建任务。可以这么理解，模块代码转换的工作由 loader 来处理，除此之外的其他任何工作都可以交由 plugin 来完成。通过添加我们需要的 plugin，可以满足更多构建中特殊的需求。例如，要使用压缩 JS 代码的 uglifyjs-webpack-plugin 插件，只需在配置中通过 plugins 字段添加新的 plugin 即可：

const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new UglifyPlugin()
  ],
}
除了压缩 JS 代码的 uglifyjs-webpack-plugin，常用的还有定义环境变量的 DefinePlugin，生成 CSS 文件的 ExtractTextWebpackPlugin 等。在这里提到这些 plugin，只是希望读者们能够对 plugin 的作用有个大概的印象，后续的小节会详细介绍如何使用这些 plugin。

plugin 理论上可以干涉 webpack 整个构建流程，可以在流程的每一个步骤中定制自己的构建需求。第 15 小节我们会介绍如何开发 plugin，让读者们在必要时，也可以在 webpack 的基础上开发 plugin 来应对一些项目的特殊构建需求。

# 输出
webpack 的输出即指 webpack 最终构建出来的静态文件，可以看看上面 webpack 官方图片右侧的那些文件。当然，构建结果的文件名、路径等都是可以配置的，使用 output 字段：

module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}

// 或者多个入口生成不同文件
module.exports = {
  entry: {
    foo: './src/foo.js',
    bar: './src/bar.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
...

因为是作为项目依赖进行安装，所以不会有全局的命令，npm/yarn 会帮助我们在当前项目依赖中寻找对应的命令执行，如果是全局安装的 webpack，直接执行 webpack --mode production 就可以。

webpack ...
