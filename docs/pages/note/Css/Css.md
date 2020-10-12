### 1. BFC(块级格式化上下文)触发条件以及规则

BFC块级格式化上下文， 是一个块级元素的渲染显示规则。它是页面中的一块渲染区域，并且有一套渲染规则。通俗来讲就是一个封闭的容器，容器内的子元素不会影响容器外的元素，容器外的元素也不会影响容器内的元素。

```
1. float的值不为none
2. overflow 的值不为 visible
3. 根元素 html 默认会新建一个 BFC
4. display的值为table-cell、table-caption 和 inline-block 之一
5. position的值不为static或者releative中的任何一个(为 absolute 或者 flex)

BFC是一个隔离的容器
```

#### BFC 规则

```
1. 盒子在垂直方向上， 从上往下一个接着一个布局。
2. 垂直方向上的距离由 margin 决定，同一个BFC之内，垂直方向上相邻的 block-level-box margin 会折叠， 这就是经典的 margin 塌陷 (边距折叠)现象。
  出现原因: 留白 -> 够了就行, 取较大边距。
3. 由于有 float 元素， 一个盒子大小可能会缩小， 除非他新建一个BFC(overflow 清除浮动)
4. BFC区域不会和 float 折叠 (左侧固定， 右边自适应)
```

### 2. 语义化标签有哪些？意义或者说作用是什么？

```html
h1-h6 标题
title 页面主体内容
p 段落
header 头部
footer 尾部
nav 导航
article 文章
section 定义文档中的节
```

好处：

```
 1. HTML结构清晰
 2. 代码可读性较好
 3. 无障碍阅读
 4. seo 搜索引擎优化(搜索引擎可以根据标签的语言确定上下文和权重问题)
 5. 移动设备能够更完美的展现网页（对css支持较弱的设备）
 6. 便于团队维护和开发
```

### 3. 图片懒加载

```
1. 使用浏览器提供的APi IntersectionObserver 交叉观察者
- 监听目标元素 与 祖先或者视窗交叉状态的手段，其实就是观察一个元素是否在视窗可见。
- new IntersectionObserver 第一个参数是一个回调，在里面对要监听的元素进行遍历，当元素isIntersection，将data-origin的值放到src，同时停止监听已经开始加载的图片，第二个参数是一些配置项，rootMargin可以设置交叉到什么位置才开始派发事件。

2. 原生
- 给需要懒加载的标签的src设置缩略图，自定义一个属性(data-url) 值为真正的图片地址，定义一个类名lazyload，用来标识该图片是需要懒加载的。
- 监听窗口的滚动事件，当用户滚动窗口时，遍历所有需要懒加载的元素，判断是否在可视区域，若在可视区，设置src为真正的图片地址
- 判断是否出现在可视区是通过元素的getBoundingClientRect属性的top值 和页面的innerHeight进行比较，如果top小于innerHeight，说明元素出现在可视区。则将src设为真正的地址。
```

