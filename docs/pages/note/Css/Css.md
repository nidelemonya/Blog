### 1. BFC(块级元素格式化上下文)触发条件以及规则

1. float的值不为none
2. overflow 的值不为 visible
3. 根元素 html 默认会新建一个 BFC
4. display的值为table-cell、table-caption 和 inline-block 之一
5. position的值不为static或者releative中的任何一个(为 absolute 或者 flex)

BFC是一个隔离的容器

#### BFC 规则

- 盒子在垂直方向上， 从上往下一个接着一个布局。

- 垂直方向上的距离由 margin 决定，同一个BFC之内，垂直方向上相邻的 block-level-box margin 会折叠， 经典 margin 塌陷 (边距折叠)

  出现原因: 留白 -> 够了就行, 取较大边距。

- 由于有 float 元素， 一个盒子大小可能会缩小， 除非他新建一个BFC(overflow 清除浮动)

- w3c 上没有，自己总结的： BFC区域 不会和 float 折叠 (左侧固定， 右边自适应)

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

