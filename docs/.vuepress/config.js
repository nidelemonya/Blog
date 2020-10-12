module.exports = {
  theme: 'reco',
  title: '是你的lemon呀',
  description: `蓬莱文章建安骨，中间小谢又清发`,
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
    recordLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间，只填写年份
    startYear: '2020',
    noFoundPageByTencent: false,
    codeTheme: 'okaidia', // default 'tomorrow'
    sidebarDepth: 2, // e'b将同时提取markdown中 h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件 git 最后提交的时间
    nav: [ //    导航栏配置
      {
        text: '笔记',
        link: '/pages/note/js/inherit.html',
        icon: 'reco-document'
      }, // 内部链接 以docs为根目录
      {
        text: '掘金',
        link: 'https://juejin.im/user/5dac2f786fb9a04e235779db',
        icon: 'reco-juejin'
      },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        icon: 'reco-github',
        link: 'https://github.com/Bruce-shy/',
      },
      {
        text: '项目展示',
        icon:'reco-coding',
        items: [{
          text: 'jike-time',
          link: 'http://nidelemonya.cn/build'
        },
      ]
      }
    ],
    sidebar: { //   侧边栏配置
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/pages/note': [
        {
          title: 'JavaScript', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/js/async-await.md','async-await'],
            ['../pages/note/js/防抖和节流.md','防抖和节流'],
            ['../pages/note/js/deep-clone.md','深克隆'],
            ['../pages/note/js/继承与原型链.md','继承与原型链'], // 以docs为根目录来查找文件 
            ['../pages/note/js/instanceof.md','实现instanceof'],
            ['../pages/note/js/new.md','请你实现一个new'],
            ['../pages/note/js/object.create.md','实现object.create'],
            ['../pages/note/js/promise.md','Promise'],
            ['../pages/note/js/this.md','this'],
            ['../pages/note/js/箭头函数和普通函数的区别.md','箭头函数和普通函数的区别'],
          ]
        },
        {
          title: '计算机网络', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/计算机网络/Http协议.md','Http协议']
          ]
        },
        {
          title: 'Css', 
          collapsable:true, 
          sidebarDepth: 2,
          children: [
            ['../pages/note/Css/Css.md','Css']
          ]
        }
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
          right: "30px",
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
        shape: ['star'],  
        zIndex: 999999999
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: '告白之夜',
            artist: 'Ayasa绚沙',
            url: '/bgm/night.mp3',
            cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2613879787,2147200089&fm=26&gp=0.jpg'
          },
          {
            name: 'lemon',
            artist: '米津玄师',
            url: '/bgm/lemon.mp3',
            cover: 'http://p1.music.126.net/6IeZ9MiSSDXifj74nzH6ww==/109951163561494000.jpg'
          }
        ],
        position: { 
          left: '10px', 
          bottom: '10px', 
          'z-index': '999999'
        },
        autoShrink: true,
        shrinkMode: 'float',
        floatPosition:'left',
        floatStyle: { bottom: '100px', 'z-index': '999999' }
      }
    ]
  ]
}