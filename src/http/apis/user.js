import request from '../interceptor'

// 登录方法
export function login(username, password) {
  const data = {
    username,
    password,
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
