---
title: 实现instanceof
date: 2020-08-19
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Js
 - 继承
publish: true
---
## 实现 instanceof

### instanceof 原理

instanceof 谁是谁的实例 谁继承谁

obj instanceof Constructor

就是判断 左边这个对象(obj) 它的原型链上面 有没有出现过Constructor.prototype 这个对象

查找左边这个对象的原型链， 看原型链上有没有出现过 Constructor.prototype  这个对象， 如果出现了 返回 true,  如果一直找到原型链的顶端都还没找到, 返回false

#### 鸡和蛋问题

```js
// 如果用 instanceof 判断以下两个构造函数， 那么他俩就成了鸡和蛋的问题
console.log(Object instanceof Function) // true
console.log(Function instanceof Object) // true
// 即 查找 Object 的原型链可以找到 Function.prototype
// 查找 Function 的原型链可以找到 Object.prototype
```

String Boolean Array Number 都继承自 Function

### 手写 instanceof

```js
function instance_of(L, R) {
    var O = R.prototype // 取R的显示原型
    L = L.__proto__ // 取 L 的隐式原型
    while(true) {
        if (L === O) return true // 如果找到了返回 true
        if (L === null) return false // 如果找到顶点还没找到 返回false
        L = L.__proto__ // 没找到 继续查找上一层
    }
}
```