---
title:  JSON
date: 2018-05-1 17:21:51
tags: [javascript, JSON, JSON.parse, JSON.stringify ]
---
JSON.parse()和JSON.stringify()使用介绍


parse用于从一个字符串中解析出json对象,如
```
var str = '{"name":"alanliu","age":"23"}'
JSON.parse(str)
/*
{ 
    age: "23"
    name: "huangxiaojian"
}
*/
```

注意：单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常。


stringify()用于从一个对象解析出字符串，如

```
var a = {a:1,b:2}
JSON.stringify(a)
//"{"a":1,"b":2}"
```