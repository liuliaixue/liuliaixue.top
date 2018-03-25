---
title: et environment variables in powershell
date: 2017-09-11 17:21:51
tags: powershell environment variables env
---

# set environment variables
```
$env:NODE_ENV='cnTest'; 
```

# a powershell script file(.ps1)
```
"cnTest server";
$env:NODE_ENV='cnTest'; 
node server.js;
```