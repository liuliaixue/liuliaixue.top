---
title: mongo游标
date: 2018-05-1 17:21:51
tags: [linux, mongo, mongo cursor]
---

## mongodb 游标
在查询mongodb时， 有时需要 遍历 **整个** collection或者 批处理**大量**的数据，用普通的find()会消耗大量内存且不便于操作

### 用法
```
 	db.collection.find(query, projection);
```

| 参数 | 类型 | 描述 |
| -- | -- | -------- |
| query | document | 可选. 使用查询操作符指定查询条件 |
| projection | document | 指定使用投影运算符返回的字段省略此参数返回匹配文档中的所有字段 |

```
async function readDataFromDB(db, col, query, projection) {
  let resultArr = [];

  const cursor = db.collection(col).find(query, projection);
  for (let doc = await cursor.next(); doc != null; doc = await cursor.next()){
    resultArr.push(doc);
  }
  return await Promise.all(resultArr);
}
```