---
title: handle error in promise
date: 2018-07-10 22:04:51
tags: [nodejs, javascript, promise, try-catch]

---

在使用promise嵌套时，容易忽略一点，promise中的回调有错误不会被catch到

```
const fs = require('fs');
const reader = (file) => {
    return new Promise((resolve, reject) => {
        let row = ''
        const rs = fs.createReadStream(file, { encoding: 'utf8' });
        rs.on('data', chunk => {
            row += chunk
            console.log('@chunk', chunk)
            throw new Error('Error in callback')

        })
        rs.on('close', () => resolve(row))
    })
}

executor = async () => {
    try {
        await reader('./test.js')
    } catch (e) {
        console.log('Error in reader')
    }

}
executor()
```
这错误在`Error in callback`,并且错误没有被外层catch到，导致程序退出

正确的写法，handle callback中的error

```
const fs = require('fs');
const reader = (file) => {
    return new Promise((resolve, reject) => {
        let row = ''
        const rs = fs.createReadStream(file, { encoding: 'utf8' });
        rs.on('data', chunk => {
            try {
                row += chunk
                console.log('@chunk', chunk)
                throw new Error('Error in callback')
            } catch (e) {
                reject(e)
            }
        })
        rs.on('close', () => resolve(row))
    })
}

executor = async () => {
    try {
        await reader('./test.js')
    } catch (e) {
        console.log('Error in reader')
    }

}
executor()
```