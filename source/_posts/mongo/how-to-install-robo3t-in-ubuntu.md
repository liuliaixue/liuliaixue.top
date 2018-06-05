---
title: mongo可视化工具
date: 2018-05-1 17:21:51
tags: [linux, mongo, robo3t]
---

## download robo3t.tar.gz
link https://robomongo.org/download

## tar
```
tar zxvf package.tar.gz
```

## start robo3t error
```
This application failed to start because it could not find or load the Qt platform plugin "xcb"
in "".

Available platform plugins are: xcb.

Reinstalling the application may fix this problem.
Aborted (core dumped)
```


## how to fix
```
1 mkdir ~/robo-backup
2 mv robo3t-1.1.1-linux-x86_64-c93c6b0/lib/libstdc++* ~/robo-backup/
3 robo3t-1.1.1-linux-x86_64-c93c6b0/bin/robo3t
```

ref:
https://www.cnblogs.com/hexin0614/p/7487191.html
https://askubuntu.com/questions/941383/cannot-run-robo-3t-qt-app
https://github.com/Studio3T/robomongo/issues/1384