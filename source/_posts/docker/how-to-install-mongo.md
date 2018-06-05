---
title:  Docker:mongo
date: 2018-06-5 17:21:51
tags: [docker, mongo]
---


## install mongo
```
sudo docker search mongo
sudo docker pull mongo:3.2

```
## show images list
```
sudo docker images
```
```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mongo               3.2                 c2a3c30cef05        9 days ago          301MB
hello-world         latest              f2a91732366c        2 weeks ago         1.85kB
```
## run mongo
```
docker run  --name some-mongo   -p 27017:27017   -d mongo:3.2
sudo docker ps
```

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
ab77b469d968        mongo:3.2           "docker-entrypoint.s…"   25 seconds ago      Up 24 seconds       0.0.0.0:27017->27017/tcp   some-mongo

```
## how to verify mongo running

open http://localhost:27017/, will show

It looks like you are trying to access MongoDB over HTTP on the native driver port.

## using docker container bash
```
sudo docker exec -it <container_ID> sh
# mongo
# > db.user.insert({name:"alan"});
# > db.user.find();
# > exit
# exit
```
## backup mongo

```
sudo docker cp <container_ID>:/data/db ./20170101
ls 20170101/
```


## stop container
```
sudo docker stop <ocntainer_ID>
```

## some useful cmd
```
sudo docker container ls -a // list all container, include stopped
sudo docker start <container_name> start a stopped container
```


## docker cp
docker cp mycontainer：/opt/testnew/file.txt /opt/test/
docker cp /opt/test/file.txt mycontainer：/opt/testnew/

sudo docker cp /home/liuli/backup/dump/* cn-prod:/dump

sudo docker cp 2a1296fae066:/data/db /home/ubuntu/mongo-backup/04-23-2018-empty
sudo docker cp /home/ubuntu/mongo-backup/12-21-2017/* 2a1296fae066:/data/db