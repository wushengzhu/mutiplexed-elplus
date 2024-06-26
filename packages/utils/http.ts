import axios from 'axios'

const service = axios.create({
  baseURL: '/api'
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log(response);
    return response.data
  },
  function (error) {
    const msg = error.response.data.msg || '请求失败'
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    return Promise.reject(error)
  }
)

export default service
