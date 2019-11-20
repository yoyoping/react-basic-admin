/*
 * @Description: 请求封装
 * @Author: zhangping
 * @Date: 2019-07-19 17:40:49
 * @LastEditTime: 2019-09-24 17:37:29
 * @LastEditors: Please set LastEditors
 */
import Fly from 'flyio'
import ApiUri from "./api"
// import { createHashHistory } from 'history' // hashRouter编程式跳转

// 请求参数类型
interface IParams {
	uriCode: any,
	method?: string;
}

//添加请求拦截器
Fly.interceptors.request.use((config:any) => {
	config.baseURL = process.env.NODE_ENV === `production` ? `/` : ``
	//给所有请求添加自定义header
	config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
	config.headers['x-access-token'] = localStorage['token'] || ''
	config.headers['Access-Control-Allow-Origin'] = '*'
	config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
	config.timeout = 30000
	return config;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
Fly.interceptors.response.use((response:any) => {
		const data = response.data
		if (response.status >=200 && response.status < 300) {
			return data
		} else {
			return new Promise((response,reject) => {
				reject(data)
			})
		}
	},
	(error:any) => {
		let errDescription = '系统错误！'
		switch (error.response.status) {
			case 400:
				errDescription = error.response.data.detail || '参数错误！'
				break
			case 404:
				errDescription = '资源未找到！'
				break
			case 500:
				errDescription = '系统错误！'
				break
			default:
				errDescription = error.response.data.detail
		}
		console.log(errDescription)
		return new Promise((response,reject) => {
			reject(error)
		})
		//发生网络错误后会走到这里
		//promise.resolve("ssss")
	}
)


let newApiUri:any = ApiUri
const Fetch = (params:IParams) => {
	// 当前api对象
	const uriObj = newApiUri[params[`uriCode`]]
	// 请求的url
  let uri = uriObj.uri
	// 请求的方法类型
	let method_: 'get' | 'post' | 'patch' | 'delete' | 'put'
	if (!uriObj.method) {
		method_ = 'get'
	} else {
		method_ = uriObj.method;
	}
  // 获取传给后端的参数
  let param = JSON.parse(JSON.stringify(params))
  delete param[`uriCode`]
	delete param.method
	const _fly: any = Fly
  return _fly[method_](uri, param)
}

export default Fetch