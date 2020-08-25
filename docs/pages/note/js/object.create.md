---
title: 实现Object.create
date: 2020-08-21
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Js
publish: true
---

## 模拟 Object.create

原理： Object.create() 方法创建一个新对象， 使用现有的对象来提供新创建的对象的`__proto__`

返回一个 新对象， 带着指定的原型对象和属性。

```js
function _create(proto) {
    function F() {}
    F.prototype = proto
    return new F()
}
```

可以用来实现 类式继承

### 实现 JSON.parse

```js
var json = '{"name": "cxk", "age": 25}'
var obj = eval("(" + json + ")")
```

此方法属于黑魔法，极易被 xss 攻击。