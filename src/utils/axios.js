import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true
// 这些都是根据前后端协商来定义的，此定义不是万金油
// 发送时
axios.interceptors.request.use (config => {
  // 开始
  return config
}, err => {
  return Promise.reject (err)
})

// 响应时
axios.interceptors.response.use (response => response, err => Promise.resolve (err.response))

// 检查状态码
function checkStatus (res) {
  // 结束
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  }
  return res
}


// 检查CODE值
function checkCode (res) {
  if (res.code === 0) {
    throw new Error (res.msg)
  }

  return res
}

const baseURL = ''

export default {
  get (url, params) {
    if (!url) return
    return axios ({
      method: 'get',
      url: baseURL + url,
      params,
      timeout: 30000
    }).then (checkStatus).then (checkCode)
  },
  post (url, data) {
    if (!url) return
    return axios ({
      method: 'post',
      url: baseURL + url,
      data: qs.stringify (data),
      timeout: 30000
    }).then (checkStatus).then (checkCode)
  },
  postFile (url, data) {
    if (!url) return
    return axios ({
      method: 'post',
      url: baseURL + url,
      data
    }).then (checkStatus).then (checkCode)
  }
}
