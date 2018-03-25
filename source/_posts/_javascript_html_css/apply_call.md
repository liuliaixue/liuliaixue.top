---
title: apply and call
date: 2017-09-11 17:21:51
tags: apply call
---


```
var add = function(a,b){
	this.alias = "ADD";
	return a + b;
}


var sub = function(a,b){
	this.alias = "SUB";
	return a-b
}

add(5,3) ; //8
add.call(sub,5,3);//8
add.apply(sub,[5,3]);//8
```

都是8好像sub没什么用啊，主要是因为 add 和 sub 这两个方法没有用到 this 这个对象

```
var add = function(a,b){

	return	a +	this.alias + b;
}

add.alias = "+";


var sub = function(a,b){

	return    a + this.alias+ b;
}

sub.alias = "-";

add(5,3) ;//NaN
add.call(sub,5,3); //'5-3'
add.apply(sub,[5,3]); //'5-3'
```

虽然运行了add的方法 ，但是用到了sub对象的参数（this.alias）



