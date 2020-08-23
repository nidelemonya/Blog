---
title: 实现Promise
date: 2020-08-22
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Js
publish: true
---

## 手写一个 Promise

### 什么是 Promise

Promise 对象用于表示一个异步操作的最终完成(或失败)，及其结果值。

Promise 有以下几种状态

- pending：初始状态，既不是成功，也不是失败。
- fulfilled：意味着操作成功完成。
- rejected：意味着操作失败。

默认：

- 初始状态 pending -> 调用 resolve fulfilled
- 初始状态 pending -> 调用 reject rejected 

只要这两种情况发生， 状态就凝固了， 不会再变了。

### 约定

- 在本轮事件循环运行完成之前， 回调函数是不会被调用的。
- 即使异步操作已经完成 (成功或失败)， 在这之后通过 then() 添加的回调函数也会被调用
- 通过多次调用 then() 可以添加多个回调函数，它们会按照顺序执行。

### 链式调用

then() 函数会返回一个和原来不同的新的Promise

### 组合

Promise.resolve() 和 Promise.reject() 是手动创建一个已经 resolve 或者 reject 的 Promise 快捷方法。

Promise.all() 和 Promise.race() 是并行运行两个异步操作的两个组合式工具

### 手写 Promise

```js
    // 三种状态
    const PENDING = Symbol('PENDING')
    const FULFILLED = Symbol('FULFILLED')
    const REJECTED = Symbol('REJECTED')

    function MyPromise(fn) {
        this.value = undefined; // 传递 resolve 完成的结果 放在 this 上以便于 其他函数 都能访问到
        this.status = PENDING // 默认状态
        this.onFulfilled = () => {}; // 成功时候的回调
        let self = this; // 防止 this 丢失

        function resolve(value) {
            self.value = value;
            self.status = FULFILLED; // 调用 resolve 表明成功
            self.onFulfilled(value); // 跑到这里来调用 onFulfilled
            // console.log(value);
        }

        function reject(value) {}
        fn(resolve, reject)
    }
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        // onFulfilled( resolve 的结果) 这里是立即调用的 没有等待 resolve 调用 就执行 所以为 undefined
        if (this.status === FULFILLED) onFulfilled(this.value)
        else if (this.status === PENDING) {
            this.onFulfilled = onFulfilled; // onFulfilled 赋给 构造函数成功时的回调
        } else onRejected()

    }

    // 测试
    new MyPromise((resolve, reject) => {
            setTimeout(() => {
                resolve(1) // this 指向哪 看在哪里调用 普通调用 指向 window
            }, 2000)
        })
        .then((res) => {
            console.log(res)
        }, () => {})
```
