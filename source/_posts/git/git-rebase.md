git rebase 

git rebase 是用来合并分支的。会把当前分支的提交作为补丁，一个一个应用在作为base的分支上面。
如果有冲突，需要解决冲突然后重新提交，然后
```
git add _file
git rebase --contune
```

比如
```
git checkout master
git add master1.txt
git commit -a -m 'commit master1.txt'

git checkout rebase
git add rebase1.txt
git commit -a -m 'commit rebase1.txt'

git checkout master
git add master2.txt
git commit -a -m 'commit master2.txt'

git checkout rebase
git rebase master

```

结果是自动合并,并回到 branch rebase,注意commit的顺序，rebase上的commit都在master的后面
```
//git log

commit rebase1.txt
commit master2.txt
commit master1.txt
```