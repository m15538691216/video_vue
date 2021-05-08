

import request from '../interceptor'



// 获取动漫列表
export function animeGetList(query) {
    return request({
        url: '/api/anime/getList',
        method: 'get',
        params:query
    })
}


export function animeGetDetails(query) {
    return request({
        url: '/api/anime/getDetails',
        method: 'get',
        params:query
    })
}

