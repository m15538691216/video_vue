/*
 * @Author: Mzz 
 * @Date: 2020-12-25 10:38:21 
 * @Last Modified by: mzz
 * @Last Modified time: 2021-04-22 23:00:30
 * 描述：视频模块
 */

import request from '../interceptor'

// 
export function getScreen(query) {
    return request({
        url: '/api/screen',
        method: 'get',
        params: query
    })
}


export function getSearch(query) {
    return request({
        url: '/api/search',
        method: 'get',
        params: query,
        toast: true
    })
}

export function getScreenList(query) {
    return request({
        url: '/api/screen/list',
        method: 'get',
        params: query,
    })
}

export function getRecomList(query) {
    return request({
        url: '/api/recom/list',
        method: 'get',
        params: query,
    })
}


