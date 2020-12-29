/*
 * @Author: Mzz 
 * @Date: 2020-12-25 10:38:21 
 * @Last Modified by: Mzz
 * @Last Modified time: 2020-12-25 10:39:24
 * 描述：视频模块
 */

import request from '../interceptor'

// 登录方法
export function getVideo(query) {
    return request({
        url: '/api/getVideo',
        method: 'get',
        params: query
    })
}