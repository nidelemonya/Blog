## 继承与原型链

JavaScript 在 es6 中引入了 class 关键字，但那只是语法糖， JavaScript 仍然是**基于原型**的。

JavaScript 只有一种解构：对象。 每个实例对象(object) 都有一个私有属性(称为_proto__ ) 指向它的构造函数的原型对象 (prototype)。该原型对象也有一个自己的原型对象(_proto__ ), 层层向上直到一个对象的原型对象为 null。 根据定义， null 没有原型，作为原型链的终点。

几乎所有的 JavaScript 中的对象都是位于原型链顶端的object的实例。

## 基于原型链的继承

### 继承属性

JavaScript对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上查找，还会搜索该对象的原型，依次层层向上搜索，直到找到一个名字匹配的属性或者到达原型链的末端。

### 继承方法

在JavaScript中，任何函数都可以添加到对象上作为对象的属性。当继承的函数被调用时，this 指向的是当前继承的对象，而不是继承的函数所在的原型对象。



#### 使用 Object.create 创建的对象

object.create()。可以调用这个方法来创建一个新对象。**新对象的原型**就是调用create方法时传入的第一个参数。即使用现有的对象来提供新创建对象的_proto__。

#### 使用 class 关键字创建的对象

新的关键字 包括 class , constructor,  static,  extends,  super

#### 性能问题

由于试图查找不存在的属性时会遍历整个原型链，这对性能有影响。

hasOwnProperty 方法 检查对象是否具有自己定义的属性， 而不是其原型链上的某个属性。(是一个处理属性并且不会遍历原型链的方法，还有一个是 Object.keys())

### 试题分析

```js
	// 填充 inherit 完成输出。
    function inherit(ParentConstructor, prototypeObj) {
        function Cat (name) {
            ParentConstructor.call(this, name)
        }
        Cat.prototype = prototypeObj // 存自己的方法
        // Object.setPrototypeOf(Cat.prototype, ParentConstructor.prototype)
        Cat.prototype.__proto__ = ParentConstructor.prototype // 原型链
        return Cat
    }
    let animalNum = 0;
    function Animal(name) {
        animalNum++;
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    const Cat = inherit(Animal, {
        say: function () {
            console.log(`NO${animalNum}:${this.getName()}`);
        }
    });
    const cat1 = new Cat('小花');
    cat1.say(); // NO1:小花
```

本题是一道经典继承题，需要我们 实现一个继承方法，使 Cat 继承 Animal 上面的属性和方法。

#### 继承属性

ParentConstructor.call(this, name) 父级构造函数的this指向Cat的实例对象。

例子：

```js
	function Foo() {
        // 3
        this.a = 1
        this.b = 2
    }
    Foo.prototype.say = () => {console.log('hello')}
    let obj = {}
    Foo.call(obj) // => this 指向obj 所以给this 加属性就是给 obj加属性
    console.log(obj)
    function Child() {
        // 1
        Foo.call(this) // 用于 继承 属性
    }
```



#### 继承方法

通过原型链修改

1. Object.setPrototypeOf(Cat.prototype, ParentConstructor.prototype)
2. Cat.prototype._proto__ *=* ParentConstructor.prototype

例子：

```js
Child.prototype.__proto__ = Foo.prototype
或者
Child.prototype = Object.create(Foo.prototype)
```

总结：

```js
c.__proto__ === Child.prototype // true
Child.prototype.__proto__ === Foo.prototype // true
Foo.prototype.__proto__ === Object.prototype // true
Object.prototype.__proto__ === null // true
```

\---

title: 继承与原型链

date: 2020-08-19

sidebar: 'auto'

categories:

 \- 笔记

tags:

 \- Js

 \- 继承

publish: true

\---

