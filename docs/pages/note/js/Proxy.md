### Proxy 对象

Proxy 对象用于定义基本操作的自定义行为 (如属性查找、赋值、枚举、函数调用等)。

### 语法

```js
const p = new Proxy(target, handler)
```

参数

- target 要使用 Proxy 包装的目标对象 （可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- handler 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理p的行为。

### Object.defineProperty()

**Object.defineProperty()** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

备注：应当直接在 Object 构造器对象上调用此方法，而不是在任意一个 Object 类型的实例上调用。



### 无操作转发代理

```js
let target = {};
let p = new Proxy(target, {});
p.a = 37; // 操作转发到目标
console.log(targrt.a) // 37. 操作已经被正确的转发
```



### 验证

### 拓展构造函数

### 操作DOM节点