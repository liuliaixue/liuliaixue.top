---
title: nodejs remove folder
date: 2018-05-1 17:21:51
tags: [nodejs, remove folder ]
---

```
const fs = require('fs');
const path = require('path')
const folder = '/tmp/ttcc';
const filename = '/tmp/ttx/task.sql';
if(0) {
  const filenames = fs.readdirSync('/tmp/ttcc');
  console.log(filenames)
  for(let filename of filenames) {
    const file = path.resolve(folder, filename);
    console.log(file)
    fs.unlinkSync(file)
  }
  fs.rmdirSync(folder)
}

if(1){
  const folder = path.dirname(filename);
  console.log(folder)
  fs.unlinkSync(filename);
  fs.rmdirSync(folder)
}

```