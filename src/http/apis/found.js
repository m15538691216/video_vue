import request from '../interceptor'



// 获取个人信息
export function foundUpdate(data) {
  return request({
    url: '/api/found/update',
    method: 'post',
    data: data,
    toast: true
  })
}


export function foundGetData(query) {
  return request({
    url: `/api/found/getData`,
    method: 'get',
    params: query
  })
}