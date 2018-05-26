---
title: converter突然连接不上rabbitMQ ？
date: 2018-05-1 17:21:51
tags: [nodejs, rabbitMQ]
---



安装rabbitMQ后，以服务的方式启动（开机启动），某些时候回出现converter连接不上的问题

先在 windows-任务管理器-服务 中停用 RabbitMQ,以服务器的方式启动

```
"c:\Program Files\RabbitMQ Server\rabbitmq_server-3.6.4\sbin\rabbitmq-server.bat" start
``` 

如果这种方式可以正常转换模型，那么你遇到了和作者相同的问题

