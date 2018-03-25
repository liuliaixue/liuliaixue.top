1.直接合并(straight merge)：

　　把两条分支上的历史轨迹合并，交汇到一起。

　　比如要把dev分支上的所有东东合并到master分支：

　　首先先到master分支：git checkout master

　　然后把dev给合并过来：git merge dev

　　注意没参数的情况下merge是fast-forward的，即Git将master分支的指针直接移到dev的最前方。

　　换句话说，如果顺着一个分支走下去可以到达另一个分支的话，那么Git在合并两者时，只会简单移动指针，所以这种合并成为快进式(Fast-forward)。

 ----------------------------------
　　2.压合合并(squashed commits)：

　　将一条分支上的若干个提交条目压合成一个提交条目，提交到另一条分支的末梢。

　　把dev分支上的所有提交压合成主分支上的一个提交，即压合提交：

　　git checkout master

　　git merge --squash dev

　　此时，dev上的所有提交已经合并到当前工作区并暂存，但还没有作为一个提交，可以像其他提交一样，把这个改动提交到版本库中：

　　git commit –m “something from dev”
 ----------------------------------
即，使用--squash参数，这样提交的commit只有一个parent，即原来的分支，

图形看起来，比较好看。

不加的话，有两个parent，还能看见合并过来那个分支的图形，看着乱~~