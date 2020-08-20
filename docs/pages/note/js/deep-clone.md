---
title: 深拷贝
date: 2020-08-20
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Js
publish: true
---

## 实现一个深拷贝

### 浅拷贝

浅拷贝中对象只会被克隆最外面的一层，至于更深层的对象，依然是通过引用指向同一块堆内存。

代码

```js
function shallowClone(o) {
    const obj = {};
    for (let i in o) {
        obj[i] = o[i]
    }
}
```

api: Object.assign 也可以实现浅复制

### 深拷贝

简易版

```js
const newObj = JSON.parse(JSON.stringify(oldObj))
```

缺点： 

1. 无法实现对函数 RegExp 等特殊对象的克隆
2. 抛弃对象的constructor，所有的构造函数指向 Object
3. 对象循环引用会报错。

基础面试版

```js

```





