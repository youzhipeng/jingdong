import axios from 'axios'
const baseURL_dev ='http://localhost:8081'
// const baseURL_pro=''
// const baseURL_tes=''
const fetch = axios.create({
    baseURL: baseURL_dev,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
  });
// 添加一个请求拦截器
fetch.interceptors.request.use(function (config) {
    // /做一些请求 token验证
    console.log(config,"拦截成功")
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config;
  }, function (error) {
    // 做一些与请求错误
    return Promise.reject(error);
  });

//添加一个响应拦截器
fetch.interceptors.response.use(function (response) {
    // 请求成功做点什么，判断是否请求成功
    if (response.data && response.data.err==0) {
        return response.data
      } else {
        console.log('网络异步，请稍后再试')
      }
  }, function (error) {
//    请求失败做点什么
    return Promise.reject(error);
  });
  export default fetch
