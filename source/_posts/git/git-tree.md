---
title: git log
date: 2017-09-11 17:21:51
tags: [git, git log, git log tree, git tree]
---

git tree

新建git tree命令来显示commit 树状图
```
git config --global alias.tree "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

如果已经命名会提示加上 --replace-all
```
git config --replace-all --global alias.tree "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

```