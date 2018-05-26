---
title: Ubuntu中，如何删除编译安装的node？
date: 2017-09-18 17:21:51
tags: [nodejs, nodejs installation ]
---


Ubuntu中，如何删除编译安装的node？


# 1 not good for all

```
sudo apt-get remove nodejs
```

# 2 the best
```
cd _the_path_you_install_node
sudo make uninstall
# ref: https://hungred.com/how-to/completely-removing-nodejs-npm/
```

# 3 not suggest
delete the path you installed node directly
```
which node
rm _the_path
```