---
title: 深入浅出node.js笔记
date: 2016-10-1 17:21:51
tags: [nodejs, 深入浅出node.js]
---

# 深入浅出node.js

## 第一章 Node简介

### 特点

考虑到高性能、符合事件驱动、没有历史包袱这三个原因，Javascript成为了Node的实现语言

### 异步IO

```
var fs=require('fs');
fs.readFile('/path',function(){
	console.log('read file success');
});
console.log('start read file request');
```

### 事件与回调函数
```
var http = require('http');
var querystring = require('querystring');

//侦听服务器的request事件

http.createServer(function(req,res){
	var postData="";
	req.setEncoding('utf8');

	//侦听请求的data事件

	req.on('data',function(chunk){
		postData+==chunk;
	})

	req.on('end',function(){
		res.end(postData);
	})
}).listen(8080);

console.log("服务器启动完成");
```

```
$.ajax({
	'url':"url",
	'method':"POST",
	'data':{},
	'success':function(data){
		console.log("success");
	}
})
```

### 单线程

通过分发子进程来解决单线程中大量计算的问题

 


## 第二章 模块机制

### CommonJS规范

javaScript的缺陷

	没有模块系统
	标准库较少
	没有标准接口
	缺乏包管理系统

Common对模块的定义

1 模块的引用
2 模块的定义
3 模块的标识

```引用
var math=require('math');

```

```定义
//math.js
exports.add=function(){
	var sum	= 0,
		i = 0,
		args = arguments,
		l=args.length;

	wihle(i<l){
		sum+=args[i];
		i++;
	}
	return sum;


}

```

```引用并定义
var math=require('math');
exports.increment=function(val){
	return math.add(val,1);
}

```

exports标识

### module 路径

```module_paths.js
console.log(module.paths);

```

```
E:\coolCTO\learn-html\node>node module_path.js
[ 'E:\\coolCTO\\learn-html\\node\\node_modules',
  'E:\\coolCTO\\learn-html\\node_modules',
  'E:\\coolCTO\\node_modules',
  'E:\\node_modules' ]

```

拓展名(.js .node .json)

