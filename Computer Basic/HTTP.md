### HTTP 协议

#### 前言
  看！这是本公主为你捉住的小狐仙————HTTP
  
```
主要参考《图解HTTP》，前端开发者必备知识HTTP协议。网络知识。主要学习的文章有阮大大的还有刘大大。
      http://www.ruanyifeng.com/blog/2016/08/http.html
```

读一遍书，记下来的东西可能就十分之一。因为这本书我已经陆陆续续读了几遍，但我依旧觉得自己不太懂HTTP，说不出个所以然来。
前辈说，你根本没有仔细看没有思考去理解，如果你是老师，你该怎么教别人，如果你被面试官问到这方面，你该如何回答呢？
妹子，多思考

o(*￣︶￣*)o我是不会认输的，这次我要拿下你

### 1. 关系

  http 是TCP/IP协议族的一个子集
  
### 2. 什么是TCP/IP协议族

  计算机与网络设备要相互通信，双方就必须基于相同的方法。遵循规则，这种规则称为协议
  协议中存在各式各样的内容，把与互联网相关联的协议集合起来总称为TCP/IP
  
### 3.TCP/IP 分层管理
 1. “应用层”，决定了向用户提供应用服务时通信的活动（HTTP协议也属于该层）
 2.  “传输层”，传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输，在传输쳉有两个性质不同的协议：
      TCP（传输控制协议），UDP（用户数据报协议）
  3. “网络层”，用来处理在网络上流动的数据包。数据包是网络传输的最小数据单位
  4. “链路层”，用来处理连接网络的硬件部分。硬件上的范畴均在链路层的作用范围之内
  
### 4.TCP/IP 通信传输流

举栗子：
    在应用层，我发出了一个post 请求（HTTP）
——》为了传输方便，在传输层（TCP 协议），把从应用层处收到的数据（HTTP 请求报文）进行分割，并在各个报文上打上标记序号及端口后
——》转发给网络层（IP 协议），增加作为通信目的地的mac地址后转发给链路层，这样一来，发往网络的通信请求就准备齐全了
——》链路层，接收端服务器在链路层接收到数据，按序往上层发送，一直到应用层，当传输到应用层，才能算真正的接收到了由客户端发送过来的HTTP请求

### 敲黑板
  1. 发送端在层与层之间传输数据时，每经过一层时必会被打上一个该层所属的首部信息
  2. 接收端在层与层之间传输数据时，每经过一层时会把对应的首部去掉
  
### 5. IP协议

