---
title: 防抖
date: 2020-08-21
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Js
publish: true
---

## 实现防抖函数 (debounce)

原理： 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。(联想电梯关门)

注意：传一个错误的 ID 给 clearTimeout() 不会有任何影响；也不会抛出异常

```js
const debounce = (fn, delay) => {
    let timeout = null;
    return (...arg) => {
 	    clearTimeout(timeout) 
        timeout = setTimeout(()=>{
            fn.apply(this, arg) // 普通调用 需要加call/apply 绑定 this
            // 如果是 call 则...arg(需要展开) 
            // 如果是 apply 则 arg 即可 (为数组)
        }, delay)
    }
}
```

适用场景：

1. 按钮提交， 防止多次提交， 只执行最后一次
2. 服务端验证：只执行一段连续的输入事件的最后一次， 搜索联想词功能。

生存环境 lodash.debounce

