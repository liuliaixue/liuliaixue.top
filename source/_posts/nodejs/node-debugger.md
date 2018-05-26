---
title: node debugger
date: 2017-09-11 17:21:51
tags: [node, debugger,node inspect]
---

#

ref : https://nodejs.org/api/debugger.html

```
// start script
node inspect server.js
// will break at the first 3 lines, print c or cont
cont
// will pause at 'debugger', print repl
repl
// you can print the variables in repl line
```

```
cont, c - Continue execution
next, n - Step next
step, s - Step in
out, o - Step out
pause - Pause running code (like pause button in Developer Tools)
```