import request from '../interceptor'

// 获取弹幕
export function getDanmaku(query) {
    return request({
        url: '/api/getDanmaku',
        method: 'get',
        params: query,
    })
}
