---
title: mysql
date: 
tags: [docker, install mysql, mysql:5.6] 
---

## mysql

```
# sudo docker pull mysql
$ sudo docker pull mysql:5.6

$ sudo docker run -p 3306:3306 --name mymysql  -e MYSQL_ROOT_PASSWORD=123456 -d mysql
$ sudo docker images

$ mysql -h127.0.0.1 -p3306 -uroot -p123456

$ sudo docker stop {container-id }
$ sudo docker rm {container-id }

```

```
sudo apt-get install mysql-client-core-5.7 


# sudo apt-get remove --purge mysql-client-core-5.7   
# sudo apt-get autoremove --purge mysql-client-core-5.7  

```

