import axios from 'axios'
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import { getrefreshToken } from '@/http';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.withCredentials = true;

// 创建axios实例
const service = axios.create({
    baseURL: 'http://192.168.101.163:3000',
    timeout: 10000
})
// request拦截器
service.interceptors.request.use(config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (getAccessToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.url == '/api/getrefreshToken') {
        config.headers['Authorization'] = 'Bearer ' + getRefreshToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const message = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 401) {
        console.log('登陆过期')
    } else if (code === 500) {
        return Promise.reject(new Error(message))
    } else if (code !== 200) {
        return Promise.reject('error')
    } else {
        return res.data
    }
}, error => {
    let { status, url } = error.response;
    let refreshToken = getRefreshToken()
    let accessToken = getAccessToken()
    if (refreshToken) {
        if (status == 401) {
            if (url != '/api/getrefreshToken') {
                getrefreshToken().then(res => {
                    if (res.code == 200) {
                        setAccessToken(res.data.accessToken);
                        setRefreshToken(res.data.refreshToken);
                        error.config.headers['Authorization'] = 'Bearer ' + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
                        return axios.request(error.config);
                    }
                })
            }
        }
    }

    return Promise.reject(error)
})

export default service
