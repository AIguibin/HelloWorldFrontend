# aiguibin-protal-gateway
## 前言
本项目为个人门户，意在把自己学到的东西通过实战的方式复习总结起来。
思路：
1. 整合多个前端微服务
2. 实现登陆功能，配合后端微服务
3. 根据登录人的权限，展示不同的前端微服务
## 具体实现
### vite+vue+js模板创建项目
- 修改默认配置vite.config.js
- 创建src/pages/HomeView.vue
- 创建src/pages/LoginView.vue
### 增加路由模块
- 创建src/router/modules/baseRouter.js
- 创建src/router/index.js
### [参考链接](https://blog.csdn.net/AIguibin/article/details/128755686)