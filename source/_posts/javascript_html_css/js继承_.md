---
title: js继承
date: 2017-09-11 17:21:51
tags: js继承 class call/apply
---

```
function test(str) {
   alert(this.name + " " + str);
}
var object = {name:"zhangsan"}
test.call(object, "langsin"); 
//此时，第一个参数值object传递给了test类(即方法)中出现的this，而第二个参数"langsin"则赋值给了test类(即方法)的str

function Parent(username) {
   this.username = username;
   this.hello = function() {
       alert(this.username);
   }
}

function Child(username, password) {
   Parent.call(this, username);

   this.password = password;
   this.world = function() {
       alert(this.password);
   }
}
var parent = new Parent("zhangsan");
var child = new Child("lisi", "123456");
parent.hello();
child.hello();
child.world();
```