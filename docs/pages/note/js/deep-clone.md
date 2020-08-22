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

1. 无法实现对函数、RegExp 等特殊对象的克隆
2. 抛弃对象的constructor，所有的构造函数指向 Object
3. 对象循环引用会报错。

基础面试版

```js
/**
 * deep clone
 * @param {[type]} parent object 需要进行克隆的对象
 * @return {[type]} 深克隆后的对象
 */
const clone = parent => {
    // 判断类型
    const isType = (obj, type) => {
        if (typeof obj !== 'object') return false
        const typeString = Object.prototype.toString.call(obj); // 类型判断
        let flag;
        switch (type) {
            case "Array":
                flag = typeString === '[object Array]';
                break;
            case "Date":
                flage = typeString === '[object Date]';
                break;
            case "RegExp":
                flag = typeString === '[object RegExp]';
                break;
            default:
                flag = false;
        }
        return flag;
    }


    // 处理正则
    const getRegExp = re => {
        var flags = '';
        if (re.global) flags += 'g';
        if (re.ignoreCase) flags += 'i';
        if (re.multiline) flags += 'm';
        return flags;
    }

    // 维护两个存储循环引用的数组
    const parents = [];
    const children = [];

    const _clone = parent => {
        if (parent === null) return null;
        if (typeof parent !== 'object') return parent;

        let child, proto;

        if (isType(parent, 'Array')) {
            // 对数组进行特殊处理
            child = [];
        } else if (isType(parent, 'RegExp')) {
            // 对正则对象做特殊处理
            child = new RegExp(parent.source, getRegExp(parent));
            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (isType(parent, "Date")) {
            // 对Date 对象做特殊处理
            child = new Date(parent.getTime());
        } else {
            // 处理对象原型
            proto = Object.create(parent);
            // 利用Object.create 切断原型链
            child = Object.create(proto);
        }

        // 处理循环引用
        const index = parents.indexOf(parent)

        if (index != -1) {
            // 如果父数组存在本对象, 说明之前已经被引用过， 直接返回此对象
            return chuldren[index]
        }
        parents.push(parent);
        children.push(child);

        for (let i in parent) {
            // 递归
            child[i] = _clone(parent[i]);
        }
        return child;
    }
    return _clone(parent)
}
```

局限性

1. 一些特殊情况没用处理：Buffer 对象 Map 等
2. 另外对于确保没有循环引用的对象， 我们可以省去对循环引用的特殊处理，因为这样很消耗时间

