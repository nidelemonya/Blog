---
title: 实现一个 sleep 函数
date: 2020-08-26
sidebar: 'auto'
categories:
	- 笔记
tags:
 	- 函数
publish: true
---

## 实现一个 sleep 函数

### Promise

```js
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

sleep(1000).then(()=>{
    // 骚操作
})
```

### Generator

```js
function * sleepGenerator (time) {
    yield new Promise((resolve, reject) => setTimeout(resolve, time))
}
sleepGenerator(1000).next().value.then(() => {console.log('骚操作')})
```



### Async/Await

```js
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}
async function sleepAsync() {
        console.log('我要开始休眠了')
        await sleep(1000)
        console.log('休眠了1000毫秒')
 }
```

