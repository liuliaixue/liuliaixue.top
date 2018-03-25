
---
title: node require需要注意的缓存问题
date: 2017-09-18 17:21:51
tags: nodejs node require
---

require 会优先从cache中读取文件

```
/* add.js*/
let value = 0;
module.exports = () => {
    console.log(value ++);
};



/* main.js*/
add_1 = require('./add.js');
add = require('./add.js');
add_1(); //1
add_1(); //2
add(); //3

 Object.keys(require.cache).forEach(key => console.log(require.cache[key].exports === add););
 //true
```