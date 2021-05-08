

import request from '../interceptor'



// 获取动漫列表
export function varietyGetList(query) {
    return request({
        url: '/api/variety/getList',
        method: 'get',
        params:query
    })
}

export function varietyGetDetails(query) {
    return request({
        url: '/api/variety/getDetails',
        method: 'get',
        params:query
    })
}

