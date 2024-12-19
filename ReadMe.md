# 使用的库

- node.js v20.10.0
- npm 10.2.3
- React.js ^18.3.1
- framer motion 11.15.0
- react-router-dom 6.14.2

# 文件结构

```
website/
├── public/                # 静态资源
│   ├── images/            # 图片资源
│   ├── index.html         # HTML 主模板
│   └── bus.ico            # 站点图标
├── src/                   # 主代码目录
│   ├── assets/            # 静态资源
│   │   ├── icons/         # 图标资源
│   │   ├── svg/           # 小车资源
│   │   └── images/        # 图片资源
│   ├── styles/            # 样式
│   │   ├── header.css     # 页面头部样式（已废弃）
│   │   ├── body.css       # 页面内容样式（已废弃）
│   │   └── global.css     # 全局基础样式
│   ├── animations/        # 动画相关文件
│   ├── components/        # 可复用组件
│   │   ├── Home.jsx       # 首页
│   │   ├── ContentPage.jsx  # 内容介绍页
│   │   ├── bus_stop.jsx   # 导航栏组件，即站牌
│   │   ├── Header.jsx     # 页面头部组件（已废弃）
│   │   └── Body.jsx       # 页面主体组件（已废弃）
│   ├── pages/             # 页面视图文件
│   ├── hooks/             # 自定义 React Hooks
│   ├── services/          # 数据请求接口
│   ├── utils/             # 公共工具函数
│   ├── ThemeContext.js    # 定义主题
│   ├── routes.jsx         # 页面路由配置
│   └── App.jsx            # 应用程序入口
├── .gitignore             # Git 忽略文件
├── package.json           # 依赖包配置
└── README.md              # 项目说明文档
```
