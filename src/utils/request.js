import axios from 'axios';

import {Message} from 'iview'
import _router from '@/router'


const SPECICAL_CODE = [];//特殊需要处理的情况，返回resolve页面做处理。
export default function () {
    let _ajaxNum   = 0,
         win       = window;
        // {Message}  = iview,
        // _router    = router;

    return function boxBlock () {
        let _env =  process.env.NODE_ENV;
        let _loadding = {
            self:null,
            show () {
                _ajaxNum ++;
                this.self = Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
            },
            hide () {
                if (this.self) {
                    _ajaxNum --;
                    if (!_ajaxNum) {
                        setTimeout(this.self,0)
                    }
                }
            }
        }
        
        let request = async function (method,url,data = {},opt = {showErrorToast:true,showLadding:true}) {
            let instance = axios.create({
                baseURL:_env == 'product'? 'http://47.99.78.125:8801' : '/' ,
                timeout: 5000
            });
            
            // 添加请求拦截器
            instance.interceptors.request.use(function (config) {
                let _token = win.localStorage.getItem('token');
                if (_token) {
                    config.headers['Authorization'] =`Bearer ${_token}` 
                }
                opt.showLadding && _loadding.show()
                // 在发送请求之前做些什么
                return config;
              }, function (error) {
                _loadding.hide()
                opt.showErrorToast &&  Message.info('err')
                // 对请求错误做些什么
                return Promise.reject(error);
            });
            
            // 添加响应拦截器
            instance.interceptors.response.use(function (response) {
                _loadding.hide();
                if (response.status == '401') {
                    _router.push({
                        path:"/login"
                    })
                    win.localStorage.removeItem("token")
                    return false
                }
                if (response.data.Code != '200' && !SPECICAL_CODE.includes(response.data.Code)) {
                    opt.showErrorToast &&  Message.info(response.data.Msg ||response.data.Message)
                    return Promise.reject(response);
                }
                // 对响应数据做点什么
                return response;
            }, function (error) {
               
                _loadding.hide()
                opt.showErrorToast && Message.info(error)
                // 对响应错误做点什么
                return Promise.reject(error);
            });
            let _name = method.toUpperCase() === 'GET' ? 'params' : 'data';
            let res =  await instance({
                url,
                method,
                [_name]: data,
                validateStatus: function (status) {
                    return status >= 200 && status < 300 || status == 401; // 默认的
                }
            })
            return res && res.data
        }
        
    
        return {
            get (url,data,options) {
                return request('get',url,data,options)
            },
            post (url,data,options) {
                return request('post',url,data,options)
            },
            delete (url,data,options) {
                return request('delete',url,data,options)
            },
            put (url,data,options) {
                return request('put',url,data,options)
            },
        }
    }()
    
}