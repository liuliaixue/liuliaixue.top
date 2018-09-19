---
title: 一个游戏的二进制文件修改
date: 2018-07-10 22:04:51
tags: [nodejs, binary, buffer]

---

```
const fs = require('fs')

const filepath = './paul.dll'
const point = 0x0000BFD0;

const bf = fs.readFileSync(filepath)

let datas = []

for (let i = 0; i < 12; i++) {
    datas.push(bf[point + i])
}

console.log('origin', datas)
console.log('should', [0x55, 0x8B, 0xEC, 0xB8, 0x44, 0x27, 0x00, 0x00, 0xE8, 0x63, 0x7E, 0x0F])


const updatedDatas = [0x80, 0x35, 0x5D, 0xA0, 0xB3, 0x01, 0x20, 0x33, 0xC0, 0x40, 0xC2, 0x08]

for (let i = 0; i < 12; i++) {
    bf[point + i] = updatedDatas[i]
}

let temp = []
for (let i = 0; i < 12; i++) {
    temp.push(bf[point + i])
}
console.log(temp)
console.log(updatedDatas)

fs.writeFileSync('dd.dll', bf, 'buffer')

console.log('new paul.dll was created')
```