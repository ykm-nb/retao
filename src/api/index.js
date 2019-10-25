import axios from 'axios'
import qs from 'qs'
import ls from "store2"

const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=UTF-8', //'application/json', //'application/x-www-form-urlencoded; charset=UTF-8'
    'diy': '1234567890'
}

const baseConfig = {
    headers,
    timeout: 20000,
    withCredentials: true
}

function doSucc(res) {
    if (res && (res.status === 200 || res.status === 304)) {
        return res
    }
}

function doError(res) {
    if (res.data.code == "UNAUTHORIZED") {
        // ls.session('userInfo',{})
        window.location.href = '/#/index?tologin=1'
    } else {
        return res
    }
}

const config = {}
// config.api = '/liguanjia-svr'
if (process.env.NODE_ENV == 'development') config.api = 'retao-web'
else config.api = ''

export default {
    axs(method, url, data = {}) {
        return axios({
                // ...baseConfig,
                method: method,
                url: config.api + url,
                // params: data,
                data: qs.stringify(data),
                // data: bodyData
            })
            .then(doSucc)
            .then(doError)
    },
    axss(method, url, data = {}, bodyData) {
        return axios({
                ...baseConfig,
                method: method,
                url: config.api + url,
                params: data,
                // data: qs.stringify(data),
                data: bodyData
            })
            .then(doSucc)
            .then(doError)
    },
    put(method, url, data = {}) {
        return axios({
                ...baseConfig,
                method: method,
                url: url,
                params: data,
            })
            .then(doSucc)
            .then(doError)
    },
    asxUpFile(method, url, data = {}) {
        return axios({
            headers: {
                "Content-Type": "multipart/form-data"
            },
            method: method,
            url: config.api + url,
            data: data
        })
        .then(doSucc)
        .then(doError)
    }
}