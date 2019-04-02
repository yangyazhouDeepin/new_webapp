import axios from 'axios'
import { Toast } from 'muse-ui-toast'

const service = axios.default.create({
    // baseURL,
    timeout: 0,
    maxContentLength: 4000
}) 

service.interceptors.request.use(config => {
    return config
}, (err) => {
    Promise.reject(err)
})

service.interceptors.response.use(response => {
    if (response.status !== 200) {
        Toast.message('请求错误')
    } else {
        return response.data
    }
}, err => {
    return Promise.reject(err)
})

export default service