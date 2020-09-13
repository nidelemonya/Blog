### 1. React Hooks 与 class 组件相比，有什么优点？为什么流行？

```
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
1. class 组件在组件之间复用状态逻辑很难,而 Hook 使你在无需修改组件结构的情况下复用状态逻辑。
2. class 组件的复杂组件变得难以理解。
3. class 难以理解，Hook 使你在非 class 的情况下可以使用更多的 React 特性。 
4. 极大地减少了代码量。
```

### 2. 性能优化

### 3. useMemo 和 useCallBack 的区别

```
1. usememo 是让函数在依赖不改变的情况下，不对这个值进行重新计算。
2. usecallback 是对函数进行缓存，用于子组件引用父组件的函数，父组件重新渲染，避免函数的引用发生改变。

1. useMemo优化的是函数进行运算的开销
2. useCallback优化的是组件重新渲染的开销
```

### 4. 虚拟DOM

```
真实页面对应一个 DOM 树。在传统页面的开发模式中，每次需要更新页面时，都需要手动操作DOM来进行更新，而我们知道 DOM 操作性能消耗很大。于是在 React 中出现了虚拟 DOM，它把真实 DOM 树转换为 JavaScript 对象树。

当每次数据更新时，它会重新计算虚拟 dom 树，并和上一次生成的dom 树作对比，使用 diff 算法找出不同的部分，再将这些应用到真实dom 上。
```

### 5. 为什么选择使用框架而不是原生？

```
优点：
	1. 组件化: 其中以 React 的组件化最为彻底,甚至可以到函数级别的原子组件,高度的组件化可以是我们的工程易于维护、易于组合拓展。
	2. 天然分层: JQuery 时代的代码大部分情况下是面条代码,耦合严重,现代框架不管是 MVC、MVP还是MVVM 模式都能帮助我们进行分层，代码解耦更易于读写。
	3. 生态: 现在主流前端框架都自带生态,不管是数据流管理架构还是 UI 库都有成熟的解决方案。
	4. 开发效率: 现代前端框架都默认自动更新DOM,而非我们手动操作,解放了开发者的手动DOM成本,提高开发效率,从根本上解决了UI 与状态同步问题.
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