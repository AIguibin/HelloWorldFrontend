/**
 * 配置会以一个优先顺序进行合并
 * 1.库的默认值
 * 2.实例的 defaults 属性
 * 3.请求的 config 参数
 * 后者将优先于前者
 */

import axios from 'axios';

// 全局的 axios 默认值的配置
axios.defaults.baseURL = '';
axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 创建实例，可以创建多实例进行实例配置
let service = axios.create();


// 实例的配置会覆盖全局的
service.defaults.headers.common['Authorization'] = '';
service.defaults.headers.post['Content-Type'] = 'application/json';
// withCredentials表示跨域请求时是否需要使用凭证
service.defaults.withCredentials = false;
// transformResponse在传递给 then/catch 前，允许修改响应数据
service.defaults.transformResponse = [
  // 可进行多次处理
  (data) => {
    // 对 data 进行任意转换处理,紧做data处理，在拦截器里做response处理
    console.log('transformResponse1', data);
    return data.data;
  },
  (data) => {
    // 对 data 进行任意转换处理,紧做data处理，在拦截器里做response处理
    console.log('transformResponse2', data);
    return data.data;
  }
];
// onUploadProgress 允许为上传处理进度事件
service.defaults.onUploadProgress = function (progressEvent) {
  // Do whatever you want with the native progress event
};

// onDownloadProgress 允许为下载处理进度事件
service.defaults.onDownloadProgress = function (progressEvent) {
  // 对原生进度事件的处理
};

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('interceptors.config', config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default service;
