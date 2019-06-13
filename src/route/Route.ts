/**
 * 路由集中整理，这里的只是显示在Layout组件里面的路由，通过登录、权限动态生成路由
 */
import Home from '../pages/home/Index'
import Mine from '../pages/mine/Index'
import List from '../pages/list/Index'

/**
 * 获取组件
 * @param {String} file 文件路径
 */

/**
 * path-访问的路径
 * name-名称
 * component-应用的组件
 * needLogin-是否需要登录
 * redirect-重定向
 * auth-能访问该路由的权限（没有就证明没有权限限制）
 */
const RouterMap = [
  { path: '/', name: '首页', component: Home, needLogin: false, redirect: null, auth: [] },
  { path: '/mine', name: '我的', component: Mine, needLogin: false, redirect: null, auth: [] },
  { path: '/list', name: '列表', component: List, needLogin: false, redirect: null, auth: [] },
]

export default RouterMap
