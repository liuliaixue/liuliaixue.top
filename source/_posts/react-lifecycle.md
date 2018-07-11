---
title: React lifecycle
date: 2018-07-11 22:50:29
tags: [react, lifecycle]

---
# React Lifecycle

## 首次渲染
1、getDefaultProps(): **Props**
2、getInitialState(): **State**
3、componentWillMount
4、render
5、componentDidMount

## 修改state后更新

1、shouldComponentUpdate(): **boolean**
2、componentWillUpdate
3、render
4、componentDidUpdate

## 修改 props 

1、componentWillReceiveProps(nextProps: **Props**)
2、shouldComponentUpdate
3、componentWillUpdate
4、render
5、componentDidUpdate

ref: https://segmentfault.com/a/1190000004168886