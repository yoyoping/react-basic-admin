/*
 * @Description: 路由集中整理，这里的只是显示在Layout组件里面的路由，通过登录、权限动态生成路由
 * @Author: zhangping
 * @Date: 2019-06-11 20:08:52
 * @LastEditTime: 2019-06-25 11:56:44
 * @LastEditors: Please set LastEditors
 */
import { lazy } from 'react'

/**
 * 路由懒加载
 * @param {String} filename 文件路径
 */
 const lazyRouter = (filename: string) => {
  return lazy(() => import(`../pages/${filename}`))
 }

/**
 * path: string-访问的路径
 * name: string-名称
 * component: ReactElement-应用的组件
 * needLogin: boolean-是否需要登录
 * redirect: string-重定向
 * auth: Array-能访问该路由的权限（没有就证明没有权限限制），auth: ['admin', 'user']
 */
const RouterMap = [
  { path: '/', name: '首页', component: lazyRouter('home/Index') },
  { path: '/mine', name: '我的', component: lazyRouter('mine/Index') },
  { path: '/list', name: '列表', component: lazyRouter('list/Index') },
]

export default RouterMap
