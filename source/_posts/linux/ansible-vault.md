---
title: ansible-vault
date: 2018-03-01
tags: [linux, encrypt, tool, vault]
---

```
# create a new file
$ vim account
# write some word in account, such as 'xx@xx.com:mypass'
# save


$ ansible-vault encrypt account
# input password

$cat account
# encrypted string

$ ansible-vault decrypt account

```
