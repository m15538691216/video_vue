/*
 * @Author: Mzz 
 * @Date: 2020-12-25 10:38:21 
 * @Last Modified by: Mzz
 * @Last Modified time: 2020-12-26 15:16:52
 * 描述：视频模块
 */

import request from '../interceptor'

// 
export function getLabel(query) {
    return request({
        url: '/api/getLabel',
        method: 'get',
        params: query
    })
}


