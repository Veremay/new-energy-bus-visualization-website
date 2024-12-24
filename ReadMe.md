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
│   │   ├── data/          # 存储文本资源
│   │   ├── icons/         # 图标资源
│   │   ├── svg/           # 小车资源
│   │   ├── sounds/        # 音效资源
│   │   └── images/        # 图片资源
│   ├── styles/            # 样式
│   ├── animations/        # 动画相关文件
│   ├── components/        # 可复用组件和页面
│   ├── ThemeContext.js    # 自定义的主题接口
│   └── App_home.jsx       # 应用程序入口
├── .gitignore             # Git 忽略文件
├── package.json           # 依赖包配置
└── README.md              # 项目说明文档
```
