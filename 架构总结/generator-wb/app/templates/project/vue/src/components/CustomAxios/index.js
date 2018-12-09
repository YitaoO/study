/**
 * 封装axios
 */
import axios from 'axios';
import {
  Notification
} from 'element-ui';

// 创建axios实例
const customAxios = axios.create({
  timeout: 12000, // 请求超时时间
  withCredentials: true, // 允许携带cookie
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

if (process.env.NODE_ENV !== 'development') { // 这里开发环境因为要跨域，所以开发环境不用这个配置,后期看下可以优化吗
  let url = window.location.href
  let index = (url.indexOf('login') > 0) ? url.indexOf('login') : (url.indexOf('board') > 0) ? url.indexOf('board') : url.indexOf('production')
  let baseUrl = url.slice(0, index)
  customAxios.defaults.baseURL = `${baseUrl}/`
  // customAxios.defaults.baseURL = `http://192.168.1.94:9070/wpms/`
}





// 返回拦截器(错误统一在这里处理，不在页面处理)
customAxios.interceptors.response.use((response) => {
  const data = response.data
  // 根据返回的code值来做不同的处理（和后端约定）
  switch (data.code) {
    case '0': //请求成功
      return data

    case '-1': //请求失败
      Notification.error({
        title: "错误",
        message: `查询失败，请联系开发人员！`
      });
      return Promise.reject(data);
      break

      break
    case '0001': //请求失败
      Notification.error({
        title: "错误",
        message: `${data.message}`
      });
      return Promise.reject(data);
    default:
  }
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  var message = ''
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        message = '请求错误'
        break

      case 401:

        break

      case 403:
        message = '拒绝访问'
        break

      case 404:
        message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        message = '请求超时'
        break

      case 500:
        message = '服务器内部错误'
        break

      case 501:
        message = '服务未实现'
        break

      case 502:
        message = '网关错误'
        break

      case 503:
        message = '服务不可用'
        break

      case 504:
        message = '网关超时'
        break

      case 505:
        message = 'HTTP版本不受支持'
        break

      default:
    }

  }

  Notification.error({
    title: "错误",
    message: `${message}`
  });
  if (err.response.status == '401') {
    window.location.href = './login.html'
  }
  return Promise.reject(message);
})


export default customAxios;