import request from '../interceptor'

// 登录方法
export function login(userPhone, passWord) {
  const data = {
    userPhone,
    passWord,
  }
  return request({
    url: '/api/login',
    method: 'post',
    data: data
  })
}


// 获取个人信息
export function userInfo(query) {
  return request({
    url: '/api/findUser',
    method: 'get',
    params: query
  })
}

// 获取个人信息
export function getrefreshToken(data) {
  return request({
    url: '/api/getrefreshToken',
    method: 'post',
    data: data
  })
}

//获取七牛云token
export function qiniuToken(query) {
  return request({
    url: '/api/qiniu/token',
    method: 'get',
    params: query
  })
}
