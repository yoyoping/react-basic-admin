/*
 * @Description: 公用的各种函数
 * @Author: yoyoping
 * @Date: 2019-06-12 10:06:30
 * @LastEditTime: 2019-06-12 10:32:06
 * @LastEditors: Please set LastEditors
 */

/**
 * 转eth
 * @param {Number} value 需要被转换的值
 * @param {Number} num 需要保留的小数位数，默认5位小数
 */
export const toETH = (value: number, num: number = 5) => {
  return Math.floor(value / 1e18 * Math.pow(10, num)) / Math.pow(10, num)
}

// 格式化时间 2018-05-19T08:04:52.000+0000 -> 2018-05-19 08:04:52
export const format = (time: string, type: string | null) => {
  const d = new Date(time);
  const newTime = {
    year: d.getFullYear(),
    month: (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1),
    day: d.getDate() < 10 ? `0${d.getDate()}` : d.getDate(),
    hour: d.getHours() < 10 ? `0${d.getHours()}` : d.getHours(),
    minutes: d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes(),
    second: d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()
  }
  const { year, month, day, hour, minutes, second } = newTime
  if (type === 'all') {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second
  } else {
    return year + '-' + month + '-' + day
  }
}

// 函数节流
export const Throttle = () => {
  let flags = true // 是否首次调用
  let timeout: any | null = null
  return function (func: any, time: number) {
    let _fn = func // 保存需要被延迟的函数引用
    if (flags) {
      _fn()
      flags = false
      clearTimeout(timeout)
      timeout = setTimeout(function () { // 延迟执行
        flags = true
      }, time)
    }
  }
}

// 函数防抖
// export function Debounce() {
//   let timer: any | null
//   return function (func: any, wait: number) {
//     let context = this // 传给目标函数
//     if (timer) {
//       clearTimeout(timer)
//       timer = null
//     }
//     timer = setTimeout(
//       () => { func.apply(context, arguments) }, wait)
//   }
// }

/**
 * 复制内容到剪贴板
 * @param {string} str 需要被复制的字符串内容
 */
export function copy(str: string) {
  document.addEventListener('copy', (e: any) => {
    e.clipboardData.setData('text/plain', str)
    e.preventDefault() // 阻止默认行为
  })
  document.execCommand('copy') // 使文档处于可编辑状态，否则无效
  alert('已复制到剪贴板')
}

// 获取参数
export const getQueryString = (search: string = window.location.search, name: string) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}


// 验证是否是手机设备
export const isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

// 判断是否是微信打开
const ua = navigator.userAgent.toLowerCase();
export const isWeixin = ua.indexOf('micromessenger') !== -1;

// 获取参数
export function getQueryString2(name: string) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}