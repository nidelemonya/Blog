---
title: 实现new
date: 2020-08-20
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Js
publish: true
---

## new

new 操作符做了这些事：

1. 创建了一个空的简单 JavaScript 对象(即 {})
2. 链接该对象(即设置该对象的构造函数)到另一个对象
3. 将步骤一新创建的对象作为this的上下文
4. 如果该函数没有返回对象， 则返回 this

传参完整版：

```js
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype)
    const res = fn.apply(obj, arg)
    return res instanceof Object ? res : obj
}
```
