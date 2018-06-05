---
title: linux下常用命令 
date: 2018-05-1 17:21:51
tags: [linux, chmod, vscode.deb, nodejs, tar]
---

# linux 查看命令所在目录
```
whereis git
which git
```

# linux 查看文件信息
推荐三种方法
```
ll /usr/bin/git
ls -l /usr/bin/git
ls -lh /usr/bin/git
```

# 更改文件（夹）权限
```
sudo chmod -R 777 filepath
```

# 安装vscode.deb
```
// ref https://code.visualstudio.com/docs/setup/linux
sudo dpkg -i <file>.deb
sudo apt-get install -f # Install dependencies
```

# node (tar.gz)
$ wget https://nodejs.org/dist/v8.9.3/node-v8.9.3.tar.gz
$ tar zxvf node-v8.9.3.tar.gz
<!-- sudo apt-get install gcc g++ -->
$ ./configure
$ sudo make && sudo make install

# node(tar.xz)
```
$ wget https://nodejs.org/dist/v8.9.3/node-v8.9.3-linux-x64.tar.xz
$ xz -d node-v8.9.3-linux-x64.tar.xz
$ tar xvf node-v8.9.3-linux-x64.tar

$ vi ~/.bashrc
```
add below to you env
```
export NODE_HOME=/home/ubuntu/node-v8.9.3-linux-x64
export PATH=$NODE_HOME/bin:$PATH
```


# linux 查看自己是否被 ping
```
 # view ip
 ifconfig -a
 # listen ping via opening tcp listener
 sudo tcpdump
```

# ssh 登录到 vm
sudo apt-get install openssh-server
ssh <name>@<ip>

#  how to install docker in ubuntu
https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/

# tar.gz & tar.bz2
```
#.tar.gz            
tar   -zxvf   xx.tar.gz
#.tar.bz2           
tar   -jxvf    xx.tar.bz2
```