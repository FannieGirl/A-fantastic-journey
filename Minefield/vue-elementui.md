### element ui

## 坑况：今日pull代码，潇洒npm run dev ，被告知：this dependency was not found：'element-ui/lib/theme-chalk/index.css'。。。。。。。

### 解决思路

#### 1.找不到依赖，路径问题
这是不科学的啊，昨天能够跑通的代码，今天就狗带了？
但是你也要去找找路径相关的解答，万能度娘上线，大多是这样的，应该这样引用"./" emmmm  分析了一波不太对啊！elementui 的引用方式就是这样的
#### import 'element-ui/lib/theme-chalk/index.css'

#### 2.去element官网看看
还真是他们的一个bug哈 
贴链接：https://github.com/ChenCheng0914/forum-vue/pull/2/commits/bb03f0fcd8e8c348cb7398b3944c1f039cbb43b9
但是看看了代码 跟我的问题还是不相符

#### 3.看看我的vue以及element 版本 是不是偷偷更新了什么
我出错的版本 vue 2.9.1 element 1.4.13
我去，element 版本这么低的吗？
齐刷刷的把版本提升了 element 2.3.6
然后跑一下 npm run dev 竟然就这样解决了 通过了~

#### 4.webpack 配置
你以为真的解决了吗？当我洋洋洒洒的搬砖一天，提交代码编译的时候，给了我一个彩蛋
Module not found: Error: Can't resolve 'element-ui/lib/theme-chalk/index.css'
我的上帝~玩我啊~，萌妹子也会生气的 我跟你说
正路：竟然是编译出了错，webpack走一波，通过element 知乎的提示发现要这样字配置
webpack.config.js里的loaders加上

  { test: /\.(eot|woff|ttf)$/, loader: 'url-loader' }
  
  原因是：这种情况发生是因为模块解析失败,缺少.ttf格式解析模块,vue2.0以上,在webpack.config.js

中module->rules添加{ test: /\.(eot|woff|ttf)$/, loader: 'url-loader' }

当然你也要确保自已有安装 url-loader
贴心的放上代码  npm install url-loader/cnpm install url-loader -D

#### 5.最后注意 
正确方式：import 'element-ui/lib/theme-chalk/index.css'
失败方式：import 'element-ui/lib/theme-default/index.css'
element 换了主题 没有同步代码

### 总结：
要是你遇到了同样问题，以上几种方式应该是可以给你解答的。
