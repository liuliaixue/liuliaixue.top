

## 工具和命令 
- ubuntu OS
- cron, crontab 

## 一个简单的定时任务

1 开启日志记录
```
sudo vim /etc/rsyslog.d/50-default.conf
# remove the '#' before cron.*
# save 50-default.conf
sudo  service rsyslog  restart
```

2 日志文件测试
```
crontab -e
```

```
# this task will be done once per minute
* * * * * echo "@@@@@@@ test for crontab" >> /tmp/test.txt 2>&1
```

3 查看日志文件
```
# we openned the cron log
cat /var/log/cron.log
# we log the echo to this file
cat /tmp/test.txt
```

4 删除这条定时任务
```
crontab -e
# delete the command line
```

## 一个复杂的定时任务 auto renew https certs
1 开启日志记录
```
sudo vim /etc/rsyslog.d/50-default.conf
# remove the '#' before cron.*
# save 50-default.conf
sudo  service rsyslog  restart
```

2 准备shell 脚本

尽量使用**绝对路径**, 不知道命令的路径可以使用which 查看, 比如： which node, which pm2
``` 

#/home/ubuntu/shell/renew.sh
echo "===================== stop https server ..."
/home/ubuntu/.nvm/versions/node/v8.9.1/bin/pm2 delete all
echo "@@@@@@@ stop nginx ..."
sudo service nginx stop
echo "renew ..."

# Be careful with this line, you can only generate 7 certs per week using letsencript
# You can comment this line or remove '--force-renewal' when you test
sudo certbot renew --force-renewal
echo "@@@@@@@ restart nginx ..."
sudo service nginx restart
echo "@@@@@@@ start https server ..."
NODE_ENV=cnProduction /home/ubuntu/.nvm/versions/node/v8.9.1/bin/pm2 start /home/ubuntu/MODELO_backend/server.js
echo "===================== renew finished"
```
3 添加定时任务
```
crontab -e
```

```
# this task will be done at 1st 01:01 in month 2,4,6,8,10,12
1 1 1 2,4,6,8,10,12 * /bin/sh /home/ubuntu/shell/renew.sh >> /tmp/test.txt 2>&1
```

4 查看日志
```
cat /var/log/cron.log
cat /tmp/test.txt
```

## 常见错误


### /usr/bin/env:node No such file or directory
非常大可能是 环境变量不对
我遇到的是使用pm2 时node路径不对，找不到node
```
ln -s /usr/bin/nodejs /usr/bin/node
# ln -s _your_node_path /usr/bin/node
# ln -s /usr/local/bin/nodejs /usr/bin/node
```
ref https://github.com/nodejs/node-v0.x-archive/issues/3911

### No MTA installed, discarding output
没有邮件服务器，放弃日志
通常在每个命令末尾加上`>> /tmp/test.txt 2>&1`将日志输出到文件


### XXXXXXX not found
such as `pm2: not found`
something like **No such file or directory**
we can use the absolute path

```
# wrong
pm2 start 

# right
/home/ubuntu/.nvm/versions/node/v8.9.1/bin/pm2 start 
```