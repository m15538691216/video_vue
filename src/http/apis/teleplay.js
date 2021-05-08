import request from '../interceptor'



// 获取个人信息
export function teleplayGetList() {
  return request({
    url: '/api/teleplay/getList',
    method: 'get',
  })
}

// 获取个人信息
export function teleplayDetails(query) {
  return request({
    url: '/api/teleplay/details',
    method: 'get',
    params: query
  })
}
