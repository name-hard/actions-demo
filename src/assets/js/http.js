import Axios from 'axios';
import { message } from 'antd'
const axios = Axios.create({
  baseURL: '/api',
  timeout: 6000
});
axios.interceptors.request.use((config) => {
  return config;
});
// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  return response;
}, (error) => {
  // Do something with response error
  switch (error.response.status) {
    case 401: // 无访问权限
      if (error.config.customErr && error.config.customErr.code === 401) {
        return Promise.reject(error)
      } else {
        window.location.href = '/401'
      }
      break
    case 403: // 未登录
      // cookie.removeCookie()
      // window.sessionStorage.removeItem('dictionary')
      // window.location.href = profiles.consoleDomain()
      break
    case 409: // 操作冲突
      if (error.config.customErr && error.config.customErr.code === 409) {
        return Promise.reject(error)
      } else {
        message.error(error.response.data.message)
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
      break
    default:
      message.error(error.response.data.message)
      return Promise.reject(error)
  }
});
export default axios;
