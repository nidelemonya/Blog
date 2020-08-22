---
title: 节流
date: 2020-08-21
sidebar: 'auto'
categories:
 - 笔记
tags:
 - Js
publish: true
---

## 实现节流函数 (throttle)

原理：规定在一个单位时间内， 只能触发一次函数。如果这个单位时间内触发多次函数， 只有一次生效。

```js
const throttle = (fn, delay = 500) => {
    let flag = true
    return (...arg) => {
        if (!flag) return
        flag = false
        setTimeout(()=>{
            fn.apply(this, arg)
            flag = true
        }, delay)
    }
}
```

适用场景：

1. 拖拽：固定时间只执行一次， 防止超高频率触发位置变动
2. 缩放：监控浏览器 resize
3. 动画：避免短时间内多次触发动画引起性能问题

