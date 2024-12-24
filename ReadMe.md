# Dependencies

- "cra-template": "1.2.0"
- "d3": "^7.9.0",
- "lodash": "^4.17.21",
- "motion": "^11.15.0",
- "react": "^18.3.1",
- "react-dom": "^18.3.1",
- "react-router-dom": "^7.0.2",
- "react-scripts": "5.0.1",
- "react-svg": "^16.2.0",
- "typeface-inter": "^3.18.1"

# Structure

```
website/
├── public/                # 静态资源
│   ├── images/            # 图片资源
│   ├── index.html         # HTML 主模板
│   └── bus.ico            # 站点图标
├── src/                   # 主代码目录
│   ├── assets/            # 静态资源
│   │   ├── data/          # 存储j静态资源
│   │   ├── icons/         # 图标资源
│   │   ├── svg/           # 小车资源
│   │   ├── sounds/        # 音效资源
│   │   └── images/        # 图片资源
│   ├── styles/            # 样式
│   ├── components/        # 可复用组件和页面
│   ├── ThemeContext.js    # 自定义的主题接口
│   └── App_home.jsx       # 应用程序入口
├── .gitignore             # Git 忽略文件
├── package.json           # 依赖包配置
└── README.md              # 项目说明文档
```
