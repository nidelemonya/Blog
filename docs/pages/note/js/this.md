## this

this 指当前执行上下文的一个属性， 在非严格模式下， 总是指向一个对象， 在严格模式下可以是任意值。

### 全局上下文

无论是否在严格模式下， 在全局执行环境中 (在任何函数体外部) this 都指向全局对象。即指向 window。

### 函数上下文

在函数的内部， this 的值取决于函数被调用的方式。

- 非严格模式：this 默认指向全局对象即window
- 严格模式：如果进入环境中没有设置 this 的值， this 保持为 undefined

### 类上下文

在类的构造函数中， 类中所有非静态的方法都会被添加到 this 的原型中

### 箭头函数

在箭头函数中， this 与封闭词法环境的this保持一致。

### 作为对象的方法

当函数作为对象里的方法被调用时， this 被设置为调用该函数的对象。

### 作为构造函数

当一个函数用作构造函数时 (使用new关键字)， 它的 this 被绑定到正在构造的新对象。

### 作为一个DOM事件处理函数

当函数被用作事件处理函数时，它的this 指向触发事件的元素。

### 作为一个内联事件处理函数

当代码被内联 on-event 处理函数 调用时，它的 this 指向 监听器所在的 DOM 元素。

```html
<button onclick="alert(this.tagName.toLowerCase())">
    Show this
</button>
```



### 类中的this

和普通函数一样，方法中的this值取决于它们如何被调用。

### bind apply, call 的区别

- 用 call() 调用， 第一个参数是我们指定函数调用时需要的 this， **往后的参数 就是 foo 调用时需要的形参**

- 用 apply() 调用， 往后的参数 就是 foo 调用 时需要的形参 但是不是一个个参数展开放在后面， **要用数组包起来**

- ```js
      foo.apply(newObj,[]);
      foo.call(newObj,'a','b','c');
  ```

### 总结

看函数在哪里调用？

1. 默认： `this `指向 `window`
2. `obj.`：`this` 指向这个对象
3.  `call` / `apply `和 `bind`：this 指向 第一个参数
4. `new`：`this` 指向 `new` 创建完的对象
5. 严格模式：this 指向 undefined
6. 箭头函数 看函数在哪里定义的，this 看外层函数
7. 严格模式（在函数内部 且没用设置 this的值）： this 指向 undefined