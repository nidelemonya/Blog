###  1. React Hooks 与 class 组件相比，有什么优点？为什么流行？

```
当前版本React 17.0.1 (React 17 于去年10月份发布)
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
1. class 组件在组件之间复用状态逻辑很难,而 Hook 使你在无需修改组件结构的情况下复用状态逻辑。
2. class 组件的复杂组件变得难以理解。
3. class 难以理解，Hook 使你在非 class 的情况下可以使用更多的 React 特性。 
4. 极大地减少了代码量。
```

### 2. 生命周期

```
目前 react 的生命周期分为三个阶段，分别是 挂载阶段、更新阶段、卸载阶段
挂载阶段
	1. constructor 构造函数，最先被执行
	2. componentDidMount 组件挂载完成，此时可以操作 Dom 请求数据
更新阶段
	3. shouldComponentUpdate 通常来优化 react 性能，判断组件是否需要渲染
	4. componentDidUpdate 页面更新后立即调用
卸载阶段
	5. componentWillUnmount 组件销毁或卸载时调用，可以用来清除定时器，取消网络请求等操作。
	
	被废弃的： componentWillMount  componentWillUpdate
```

### 3. React 中的keys作用

```
作用：Keys是React中用于追踪列表中元素的增、删、改时的辅助标识

具体：
	key是列表子元素的唯一标识符，新的组件可能对这个列表进行了
	增加，删除，重新排列子元素的操作，有了key的话，新旧组件对比
	到相同的key，就可以避免节点不必要的删除与创建操作，时节点的
	复用性提高，达到了提高性能的目的
	
	key 相同，但属性不同，只会更新属性；
	key不同，则会销毁组件，重新创建新组件
```

### 3. useMemo 和 useCallBack 的区别

```
1. usememo 是让函数在依赖不改变的情况下，不对这个值进行重新计算。
2. usecallback 是对函数进行缓存，使用场景是父子组件通信的时候，父组件通过props传递一个函数给子组件，子组件调用这个函数并传入相关参数完成通信；通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新。

1. useMemo优化的是函数进行运算的开销
2. useCallback优化的是组件重新渲染的开销
```

### 4. 虚拟DOM

```
真实页面对应一个 DOM 树。在传统页面的开发模式中，每次需要更新页面时，都需要手动操作DOM来进行更新，而我们知道 DOM 操作性能消耗很大。于是在 React 中出现了虚拟 DOM，它把真实 DOM 树转换为 JavaScript 对象树。

当每次数据更新时，它会重新计算虚拟 dom 树，并和上一次生成的dom 树作对比，使用 diff 算法找出不同的部分，再将这些应用到真实的dom 上。
```

### 4. state 和 props 之间的区别是什么？

```
props 和 state 都是普通的JavaScript对象。它们都是用来保存信息的，这些信息可以控制组件的渲染输出，而它们的一个重要的不同点就是：props 是传递给组件的(类似于函数的形参)，而 state 是组件内被组件自己管理的(类似于在一个函数内声明的变量)。
```

### 5.给 setState 传递一个对象与传递一个函数的区别是什么？

```
传递一个函数可以让你在函数内访问到当前的 state 的值。因为 setState 的调用是分批的，所以你可以链式地进行更新。
```

### 5. diff 算法

```
diff 算法基于两个假设
相同的组件产生类似的dom结构，不同的组件产生不同的dom结构。
同一层级的一组节点通过唯一的id进行区分。

diff 算法有三种策略：
	tree diff 对树进行分层比较，两棵树只会对同一层次的节点进行比较。
	component diff React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff 算法分析。
	element diff 当节点处于同一层级时，diff 提供了 3 种 节点操作，分别为 插入 移动 删除。
```

### 5. 为什么选择使用框架而不是原生？

```
优点：
	1. 组件化: 其中以 React 的组件化最为彻底,甚至可以到函数级别的原子组件,高度的组件化可以使我们的工程易于维护、易于组合拓展。
	2. 天然分层: JQuery 时代的代码大部分情况下是面条代码,耦合严重,现代框架不管是 MVC、MVP还是MVVM 模式都能帮助我们进行分层，代码解耦更易于读写。
	3. 生态: 现在主流前端框架都自带生态,不管是数据流管理架构还是 UI 库都有成熟的解决方案。
	4. 开发效率: 现代前端框架都默认自动更新DOM,而非我们手动操作,解放了开发者的手动DOM成本,提高开发效率,从根本上解决了 UI 与状态同步问题.
```

### 6. component 和 pureComponent 的区别，使用时有什么要注意的地方。

```
React.PureComponent 与 React.Component很相似。两者的区别在于React.Component并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。

如果赋予 React 组件相同的 props 和 state，render() 函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能。
```

```
React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。你也可以考虑使用 immutable 对象加速嵌套数据的比较。

此外，React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。
```

### 7. Memo 与 pureComponent 的区别

```
memo 为高阶组件，通过记忆组件渲染结果的方式来提高组件的性能表现。
memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染。
默认情况下其只会对复杂对象做浅层对比，如果我们想要控制对比过程，可以将自定义的比较函数通过第二个参数传入来实现。

pureComponent 是 react 官方将shouldComponentUpdate() 函数封装的好的组件。其中的shouldComponentUpdate() 也仅作对象的浅层比较。如果对象中包含复杂的数据结构，则会产生错误的比对结果。

如果我们要优化的话，可以使用 Immutable 数据结构。

需要注意的是：
shouldComponentUpdate  返回 false 组件就不会重新渲染， 返回 true 才会重新渲染
memo 返回 true 不会重新渲染，返回 false 才会重新渲染，因为 他是将上一次的props与这次的props作比较 相同返回 true 不同返回 false。
```

### 8.受控组件和非受控组件的区别

```
受控组件和非受控组件是针对表单而言的
受控组件(在React中，每当表单的状态发生变化时，都会被写入到组件的state中，这种组件在React被称为受控组件)
1. 表单元素依赖于状态，表单元素需要默认值实时映射到状态的时候，就是受控组件，这个和双向绑定相似.
2. 受控组件，表单元素的修改会实时映射到状态值上，此时就可以对输入的内容进行校验.
3. 受控组件只有继承React.Component才会有状态.
4. 受控组件必须要在表单上使用onChange事件来绑定对应的事件.

注意：
	在受控组件中，如果没有给输入框绑定onChange事件，将会收到react的警告
	并且此时输入框除了默认值，是无法输入其他任何参数的
非受控组件
1. 非受控组件即不受状态的控制，获取数据就是相当于操作DOM。
2. 非受控组件的好处是很容易和第三方组件结合。

非受控组件中获取输入框中的值的两种方法
1. 在虚拟DOM节点上使用ref，并使用函数，将函数的参数挂载到实例的属性上
2. 使用 React.createRef();
```

### 8. React.lazy 和 React.Suspense

```
React.lazy() 允许你定义一个动态加载的组件。这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件。

// 这个组件是动态加载的
const SomeComponent = React.lazy(() => import('./SomeComponent'));

渲染 lazy 组件依赖该组件渲染树上层的 <React.Suspense> 组件。这是指定加载指示器（loading indicator）的方式。
```

```
React.Suspense 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件。目前，懒加载组件是 <React.Suspense> 支持的唯一用例：

// 该组件是动态加载的
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // 显示 <Spinner> 组件直至 OtherComponent 加载完成
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```

### 9. setState 到底是异步还是同步？

```
1. setState只在合成事件和钩子函数(生命周期)中是“异步”的，在原生事件(addEventListener)和 setTimeout 中都是同步的。
2. setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
3. setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。
4.为什么 React 不同步地更新 this.state？
在开始重新渲染之前，React 会有意地进行“等待”，直到所有在组件的事件处理函数内调用的 setState() 完成之后。这样可以通过避免不必要的重新渲染来提升性能。(这样会破坏掉 props 和 state 之间的一致性，造成一些难以 debug 的问题。这样会让一些我们正在实现的新功能变得无法实现。)
```

### 10. useState 原理

```
useState 的核心理念就是闭包，它通过闭包让作用域里的变量,在函数执行完之后依旧保持，这样就可以确保我们的数据不会丢失。它在最外层通过IIFE(立即执行函数)将我们代码中的变量、函数的定义隔离出来，我们在外层声明一个私有的state,然后返回一个函数，它接受一个初始state作为参数，当我们调用这个函数的时候，它会先判断私有的state是否有值，如果有，使用私有state的值，如果没有，使用初始值。在这个函数里面还有一个setState函数，用于修改我们的私有state 变量，它接受一个新的 state参数，这里面会触发页面的重新渲染，最后我们将私有的state和setState 拼成一个数组返回出去。
```

### 11. redux 基本流程

```
Store：保存数据的地方，可以把它看成一个容器。
State：Store对象包含所有数据，某个时间点的数据集合就叫做State。
Action：State的变化，会导致View的变化。但是，用户接触不到State，只能接触到UI层。所以，State的变化必须是UI层导致的。Action就是View发出的通知，表示State应该要发生变化了。
Action Creator：一个函数用来生成Action的。
Reducer：Store收到Action以后，必须给出一个新的State，这样UI才会发生变化。这种State的计算过程就叫做Reducer。Reducer是一个函数，它接受当前State和Action作为参数，返回一个新的State。
dispatch：是UI层发出Action的唯一方法。

然后我们过下整个工作流程：

首先，用户（通过UI 层）发出Action，发出方式就用到了dispatch方法。
然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
State一旦有变化，Store就会调用监听函数，来更新UI界面。
```

### 12. 怎么用 redux-thunk 解决异步问题

```
纯粹使用redux时，你需要dispatch的是一个action对象，当你使用redux-thunk后，你dispatch的是一个function，redux-thunk中间件会自动调用这个function，并且传递dispatch方法作为其第一个参数，于是我们就能在这个function内根据我们的请求状态：开始，请求中，请求成功／失败，dispatch我们期望的任何action了，这也是为什么它能支持异步dispatch action 的原因。
```

### 13. Hooks 的实现原理

```
hooks 是通过一个总的数组或者链表来维护的，他将每个hooks函数放到数组里面，当我们声明hooks函数时，它都会依次按照顺序存起来，当我们调用相关的函数时，它也会按照顺序执行。所以以相同的顺序调用就是他的实现原理。这也是他不能放在 if的逻辑判断和循环语句之中的原因。
```

### 14.  使用 styled-components的优点

```
更加灵活，让react更加组件化，增强了 html css js 的内聚性。方便复用，类名不冲突
由于使用模板字符串，我们也可以进行传参，使用js 来控制样式。
```

### 15. 什么是 Immutable？Immutable 数据的优势？

```
JavaScript 中的对象一般是可变的(Mutable)，因为使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到原始对象。虽然这样做可以节约内存，但当应用复杂后，这就造成了非常大的隐患。为了解决这个问题，一般的做法是使用 shallowCopy（浅拷贝）或 deepCopy（深拷贝）来避免被修改，但这样做造成了 CPU 和内存的浪费。

而Immutable 可以很好地解决这些问题
Immutable 数据 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是持久化的数据结构，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免深拷贝把所有节点都复制一遍带来的性能损耗，Immutable 使用了结构共享，即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

优点：
1. Immutable 降低了 Mutable 带来的复杂度
2. 结构共享 节省内存
3. Undo/Redo，Copy/Paste，甚至时间旅行这些功能做起来小菜一碟
4. 拥抱函数式编程 Immutable 本身就是函数式编程中的概念，纯函数式编程比面向对象更适用于前端开发。
```
