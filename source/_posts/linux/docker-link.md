---
title: 创建docker镜像并连接到docker数据库
date: 2019-09-16
tags: [docker, docker.link]
---

1 首先拉去 mongo 镜像并启动

```
sudo docker run -d -p 27017:27017 --name local-mongo mongo:3.2

```

2 创建一个简单的服务器镜像,总共两个文件

```
// app.js
const http = require('http');

http
  .Server(function(req, res) {
    console.log(new Date());
    res.end(new Date().toString());
  })
  .listen(4040);
```

```
#Dockerfile
FROM node:10-alpine

MAINTAINER shangbi "liuliaixue@qq.com"

WORKDIR /home/backend

COPY app.js /home/backend

EXPOSE 4040

# RUN ls /home/backend
# RUN node -v
CMD node /home/backend/app.js

```

测试过程中可以在 Dockerfile 打印点东西,打包好了可以 docker logs <id> 查看日志,方便查看问题

```
# 创建镜像
sudo docker build -t liuliaixue/lmc:1
# 启动容器
sudo docker run --name server1 -p 4040:4040 -d liuliaixue/lmc:1
# 查看服务器log,标准输出
sudo docker logs -f server1
```

然后可以在浏览器里访问 http://localhost:4040

3 创建一个连接了数据库的服务

```

const mongoose = require ('mongoose')

// connect to mongo db
const mongoUri = 'mongodb://db/lmc'
mongoose.connect(mongoUri, { keepAlive: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

```

注意这里的 mongoUri 是`mongodb://db/lmc`,因为下一步 把 mongo 的 ip 映射到了 `db`

```
FROM node:10-alpine

MAINTAINER shangbi "liuliaixue@qq.com"

WORKDIR /home/backend

COPY .docker.env /home/backend/.env
COPY ./dist /home/backend/dist
COPY package.json /home/backend

RUN npm install

EXPOSE 4040
CMD node /home/backend/dist/index.js

```

```
sudo docker stop server1
sudo docker run build -t liuliaixue/lmc:2
sudo docker run --name server2 -p 4040:4040 -d --link local-mongo:db liuliaixue/lmc:2
```

启动服务器,这是用`--link` 把 mongo 地址映射`db`

此时可以进入 server2 查看 hosts `cat /etc/hosts`

---

ref:

https://www.cnblogs.com/lighten/p/6900556.html
https://www.oschina.net/translate/dockerlinks?cmp
