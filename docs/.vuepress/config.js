module.exports = {
  theme: 'reco',
  title: '你的lemon呀的博客',
  description: '个人学习总结',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    type: 'blog',
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    author: '你的lemon呀',
    authorAvatar: '/logo.jpg',
    codeTheme: 'solarizedlight', // default 'tomorrow'
    sidebarDepth: 2, // e'b将同时提取markdown中 h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件 git 最后提交的时间
    nav: [ //    导航栏配置
      {
        text: '大算法',
        link: '/algorithm/',
        icon: 'reco-document'
      }, // 内部链接 以docs为根目录
      {
        text: '掘金',
        link: 'https://juejin.im/user/5dac2f786fb9a04e235779db',
        icon: 'reco-juejin'
      },
      {
        text: '博客',
        link: 'http://nidelemonya.cn/',
        icon: 'reco-blog'
      }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        icon: 'reco-github',
        items: [{
            text: '全栈学习',
            link: 'https://github.com/Bruce-shy/Lesson_bm'
          },
          {
            text: '读书笔记',
            link: 'https://github.com/Bruce-shy/Reading-notes'
          },
          {
            text: 'React',
            link: 'https://github.com/Bruce-shy/React'
          },
          {
            text: 'Blog',
            link: 'https://github.com/Bruce-shy/Blog'
          },
        ]
      }
    ],
    sidebar: { //   侧边栏配置
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/pages/': [
        {
          title: 'accumulate', // 一级菜单名称
          collapsable:true, // false为默认展开菜单， 默认值为true 折叠
          sidebarDepth: 2,
          children: [
            ['../Pages/accumulate/JS/test.md','test'], // 以docs为根目录来查找文件 
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        },
        {
          title: 'algorithm', // 一级菜单名称
          collapsable:false, // false为默认展开菜单， 默认值为true 折叠
          sidebarDepth: 2,
          children: [
            ['../Pages/algorithm/simple/test.md','test'], // 以docs为根目录来查找文件 
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        },
      ]
    }
  },
  // 博客配置
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    }
  }
}