### 前言

vue 基础大变身

1. 第一步 安装 vue-cli
```
npm install -g @vue/cli
```

bug: 1. 本姑凉的电脑报 4068 的错误（不知道怎么的 我的电脑运行命令总是不是管理员身份）
那就先手动管理员身份运行命令吧

bug：2. You are using Node v6.11.5, but this version of vue-cli requires Node >=8.
Please upgrade your Node version.
（那就升级我的node吧）

```
npm install -g n

````
emmm  各种华丽报错，我先去隔壁专门写一篇关于windows 升级node 的文章吧~

隔壁写好了node升级问题，我的node版本是10.0.0（目前最新版本啦）


```
npm install -g @vue/cli
vue create xixi
npm install -g @vue/cli-init
vue init webpack xixi
```

注：F:\zfannie\fannie-code> vue init webpack xixi （具体的路径）

这样打包环境装好了
npm run dev 妥妥的
