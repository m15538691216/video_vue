// npm安装：npm install qiniu-js
import * as qiniu from 'qiniu-js'
import { qiniuToken } from '@/http';

// 七牛云上传
var qiniudnUploader = (token, file, key, obj) => {
    var putExtra = {
        // fname: file.name,
        customVars: { 'x:test': 'http://qralocr98.hn-bkt.clouddn.com/' },
        // params: {}
    }

    var config = {
        useCdnDomain: false,
        region: qiniu.region.z2
    }

    // 上传回调
    var observer = {
        next(res) {
            // ...
            // console.log('next：' + JSON.stringify(res))
        },
        error(err) {
            // ...
            console.log('error：' + err)
        },
        complete(res) {
            // ...
            obj(res)
            // console.log('complete：' + JSON.stringify(res))
        }
    }
    const options = {
        quality: 0.92,
        noCompressIfLarger: true
        // maxWidth: 1000,
        // maxHeight: 618
    }
    qiniu.compressImage(file, options).then(data => {
        var observable = qiniu.upload(file, key, token, putExtra, config)
        observable.subscribe(observer) // 上传开始
    })

}


function getQiniuToken() {
    return new Promise((resolve, reject) => {
        qiniuToken().then(res => {
            resolve(res.data)
        })
    })
}


export default {
    qiniudnUploader,
    getQiniuToken
}