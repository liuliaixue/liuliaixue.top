---
title:  css隐藏多余文本
date: 2018-05-1 17:21:51
tags: [ css]
---

```
div{
    white-space: nowrap; //不换行
    width: 200px;//宽度
    overflow: hidden;//多余的隐藏
    text-overflow: ellipsis;//多余的显示成点点点
}
```