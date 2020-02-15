/* 
  发起请求的request基类
  2020-2-14 田文杨
*/
import axios from 'axios'
import {
    Message,
    MessageBox
} from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200 && response.status !== 200) {
      Message({
        type: 'error',
        message: `响应失败：${res.code || response.status}`,
        duration: '2000'
      })
      return Promise.reject(new Error(res.message || '网络错误,请稍后重试'))
    } else {
      // token 失效
      if (res.data.code === 4003) {
        MessageBox.confirm('您已被登出，可以取消继续留在该页面，或者重新登录。', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/logout').then(() => {
            location.reload() // 重新实例化vue-router对象 避免bug
          })
        }).catch(err => console.log(err))
      } else {
        return res
      }
    }
  },
  error => {
    console.log('请求 err:' + error) // for debug
    Message({
      type: 'error',
      message: '网络错误,请稍后重试',
      duration: '2000'
    })
    return Promise.reject(error)
  }
)

export default service
