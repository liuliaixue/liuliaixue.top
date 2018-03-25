---
title: 
date: 2017-09-11 17:21:51
tags: 
---

#


比如当我们Git revert的时候，

git revert 



Git会抱怨：

is a merge but no -m option was given



这是因为你revert的那个commit是一个merge commit，它有两个parent, Git不知道base是选哪个parent，就没法diff，所以就抱怨了，所以你要显示告诉Git用哪一个parent。



git revert sidsad8 -m 1



这样就选parent 1，那么parent 1又是哪一个呢？



一般来说，如果你在master上mergezhc_branch,那么parent 1就是master，parent 2就是zhc_branch.



Often this will be parent number one, for example if you were on master and did git merge unwanted and then decided to revert the merge of unwanted. The first parent would be your pre-merge master branch and the second parent would be the tip of unwanted.

上一篇：三分钟教你学Git(十九) - 全局，用户，仓库作用域的配置文件

原文:http://blog.csdn.net/hongchangfirst/article/details/49472913

作者:hongchangfirst

hongchangfirst的主页:http://blog.csdn.net/hongchangfirst