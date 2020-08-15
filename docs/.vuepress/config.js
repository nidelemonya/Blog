module.exports = {
  theme: 'reco',
  title: '是你的lemon呀的',
  description: `弃我去者，昨日之日不可留。乱我心者，今日之日多烦忧。`,
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
    // 备案
    record: '赣ICP备20009270号',
    recordLink: 'http://www.beian.miit.gov.cn/',
    // 项目开始时间，只填写年份
    startYear: '2020',
    noFoundPageByTencent: false,
    codeTheme: 'solarizedlight', // default 'tomorrow'
    sidebarDepth: 2, // e'b将同时提取markdown中 h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件 git 最后提交的时间
    nav: [ //    导航栏配置
      {
        text: '学习笔记',
        link: '/pages/',
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
      }, 
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // 外部链接
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
          title: 'es6', // 一级菜单名称
          collapsable:true, // false为默认展开菜单， 默认值为 true 折叠
          sidebarDepth: 2,
          children: [
            ['../pages/accumulate/JS/test.md','test'], // 以docs为根目录来查找文件 
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        },
        {
          title: 'ajax', 
          collapsable:false, 
          sidebarDepth: 2,
          children: [
            ['../pages/algorithm/simple/test.md','test']
          ]
        },
        {
          title: '手写代码', 
          collapsable:false, 
          sidebarDepth: 2,
          children: [
            ['../pages/algorithm/simple/test.md','test']
          ]
        },
        {
          title: '源码分析', 
          collapsable:false, 
          sidebarDepth: 2,
          children: [
            ['../pages/algorithm/simple/test.md','test']
          ]
        },
        {
          title: '计算机网络', 
          collapsable:false, 
          sidebarDepth: 2,
          children: [
            ['../pages/algorithm/simple/test.md','test']
          ]
        },
        {
          title: '工作流机制', 
          collapsable:false, 
          sidebarDepth: 2,
          children: [
            ['../pages/algorithm/simple/test.md','test']
          ]
        },
        {
          title: '手写代码', 
          collapsable:false, 
          sidebarDepth: 2,
          children: [
            ['../pages/algorithm/simple/test.md','test']
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
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["shizuku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ],
    [
      "cursor-effects",
      {
        size: 2,                    
        shape: ['circle'],  
        zIndex: 999999999
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/favicon.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ]
  ]
}