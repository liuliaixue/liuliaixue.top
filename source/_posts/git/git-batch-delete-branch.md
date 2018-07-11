---
title:  git branch
date: 2018-07-11 23:02:37
tags: [git]
---

开发一段时间后发现本地有很多已经合并了的分支，但是一个一个删除又很麻烦，写个脚本把`develop`以外的全删了

## show all branch beside master

```bash
git branch | grep -v "develop"
```

## delete all

```bash
git branch | grep -v "develop" | xargs git branch -d
```