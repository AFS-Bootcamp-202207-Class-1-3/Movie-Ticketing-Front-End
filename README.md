# Movie-Ticketing-Front-end

## 目录结构:

### - public: 放置一些静态文件如图片等

### - src: 源码

#### - src/api: RestfulApi文件

#### - src/layout: 布局组件

#### - src/pages: 业务组件

#### - src/public: 公共的方法

#### - src/routes: 路由配置

   1. publicRoutes.js: 公开的路由，无需鉴权, 在根路由下, 如 http://domain.com/xxx
   2. userRoutes.js: 用户路由, 放置需要鉴权的用户路由, 在/User下, 如 http://domain.com/User/xxx