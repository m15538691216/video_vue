/*
 * @Author: Mzz 
 * @Date: 2020-12-25 10:38:21 
 * @Last Modified by: mzz
 * @Last Modified time: 2021-02-14 22:19:57
 * 描述：视频模块
 */

import request from '../interceptor'

// 获取电影
export function getVideo(query) {
    return request({
        url: '/api/getVideo',
        method: 'get',
        params: query,
    })
}

// 获取电影详情
export function getVideoDetails(query) {
    return request({
        url: '/api/getVideo/details',
        method: 'get',
        params: query,
        toast: true
    })
}