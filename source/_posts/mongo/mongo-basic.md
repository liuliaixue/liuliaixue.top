---
title: mongo 入门
date: 2018-06-05 17:22:51
tags: [mongo, nodejs]
---


### 简单的增删改查
```
// 数据库列表                  
show dbs;
// 使用一个数据库[testdb]            
use testdb                    
// 当前数据库 
db
// 表[uesr]插入一条数据                    
db.user.insert({name:'Alan',age:25})
// 表[uesr]查找所有数据                   
db.user.find()    
// 表[uesr]查找所有数据并格式化显示               
db.user.find().pretty()
// 表[uesr]更新数据               
db.user.update({name:'Alan'},{name:'Alan',age:26})
// 删除数据
db.user.remove({age:25})
// 当前数据库的表                       
show tables; 
show collections
```

### 细说增删改查
#### insert 插入
```
db[collect].insert(object);
db.user.insert({name:'li',age:27,height:150,weight:60}); 
```
#### find 查找 

##### >, >=, <, <=, !=, =
```
// 操作符："$gt", "$gte", "$lt", "$lte", "$ne"                 
db.user.find({name:'liu',age:{$gt:20}})  
```
##### And OR In NotIn 
```
// 操作符： "", "$or", "$in", "$nin" 
db.user.find({name:'liu',height:{$in:[150,160]}}) ;                 
```
##### 正则匹配
```
db.user.find({name:/^liu$/})
```
##### 复杂查找 
```
// 操作符：$where
db.user.find({
	$where: function() {
		return this.name = "liu";
    }
})
```

#### update 更新
整体更新和局部更新，整体更新只保存整个新文档，局部更新一部分数据
##### $inc 这条数据的增量
```
db.user.update({age:27},{$inc:{age:1}});
```
##### $set 这条数据的终值
```
db.user.update({age:27},{$set:{age:28}});
```
#### remove
删除,同简单操作




## strat,limit
 db.count.find().limit(3).skip(2)