---
title: nodejs file system
date: 2018-05-1 17:21:51
tags: [nodejs, fs]
---
fs

## 创建文件夹
```
const fs = require('fs');
fs.mkdirSync('folder_name_1');


fs.mkdir('folder_name_2', function(err) {
    console.log(err);
});
```
## 删除文件夹
```
const fs = require('fs');
fs.rmdirSync('folder_name_1');


fs.rmdir('folder_name_2', function(err) {
    console.log(err);
});

```

## 创建文件，删除文件

const buffer = Buffer.alloc(1024 * 1024);
fs.writeFileSync('file_1M', buffer);
fs.unlinkSync('file_1M')

### 只读日志文件
```
const fs = require('fs');
const accessLogfile = fs.createWriteStream('./access.log', { flags: 'a' }); //访问日志


const test = () => {
	for (let i = 0; i < 100; i++) {
		var now = new Date();
		var time = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' '
			+ now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
		accessLogfile.write(time + '\r\n\r\n\r\n')
	}

	console.log('ccc');
}
test();

module.exports = test;
```
