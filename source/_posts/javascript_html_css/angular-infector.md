---
title: angular infector
date: 2017-09-11 17:21:51
tags: [angular, infector, angular infector]
---
```
var  angular = {};
angular.services = {};
angular.factory = function(serviceName,store){
  this.services[serviceName] = store;
};

angular.control = {};

data = {name: 'alan', age: 0};
angular.factory("add",add);
 function add (){data.age++}
angular.factory("sub",sub);
 function sub(){data.age--}
angular.factory("changeName",changeName);
 function changeName(name){data.name = name}

var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
angular.controller = function(infectorName, infector) {
  // console.log(infectorName);
  // console.log(infector);
  // console.log(infector.toString())
  const argDecl = infector.toString().match(FN_ARGS);
  console.log("infector:" ,argDecl[1])
  infector.apply(this,[0,1,2])
}

var infectorUser = function(add, sub, changeName) {
  console.log(add, sub, changeName);
}
angular.controller("infectorUser",infectorUser);



  // let services = arguments;
  // let arg = [];
  // services.forEach(function(service){
  //   for(name of services) {
  //     if(services[name] === service){
  //       arg.push(services[name]);
  //       return false;
  //     }
  //   }
  //   throw service + " not definded"
  // });
  // return infector.apply(this,arg)
```