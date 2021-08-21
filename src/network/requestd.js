//子网络请求需要引入这个父网络请求
import axios from "axios";

export function requestd(config) {
  //设置请求不带参数的基本网址
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
  })
  //请求拦截
  instance.interceptors.request.use(config => {

    return config
  }, error => {

    return error
  })
  //响应拦截
  instance.interceptors.response.use(config => {

    return config.data
  }, error => {

    return error
  })
  //requestd方法返回一个带config的axios的实例
  return instance(config)
}
