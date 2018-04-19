import axios from 'axios'
import router from '../router'
import store from '../store'

const server = axios.create({
    baseURL:"http://47.97.45.19:8080",
    timeout: 10000
});
server.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//请求拦截器
server.interceptors.request.use(config=>{
    // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //     config.headers.Authorization = `token ${store.state.token}`;
    // }
    return config;
},
err=>{
    return Promise.reject(err)
})

//响应拦截器
server.interceptors.response.use(res=>{
    return res
},err=>{
    if(err.response){
        router.replace({
          name:"login"
        })
    }
    return Promise.reject(err.response.data)
})

export default server
