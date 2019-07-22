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
		if (!error.response) {
			console.error('系统繁忙！')
			return
		}
		if (error.response.status === 500) {
			console.error('系统繁忙！')
		} else if (error.response.status === 404) {
			console.error('资源未找到！')
		} else {
			console.error(error.response.data.detail)
		}
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
	switch (uriObj.method) {
		case 'post' || 'patch' || 'delete' || 'put':
			method_ = uriObj.method;
		default:
			method_ = 'get'
	}
  // 获取传给后端的参数
  let param = JSON.parse(JSON.stringify(params))
  delete param[`uriCode`]
  delete param.method
  return Fly[method_](uri, param)
}

export default Fetch