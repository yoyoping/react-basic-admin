import { notification  } from 'antd'

/**
 * Notification通知提醒框
 */
export const Notification = (type, msg, des = '不稳定因素！', duration = 4.5) => {
  if (typeof des !== 'string') {
    des = '服务器内部错误！'
  }
  notification[type]({
    message: msg,
    description: des,
    duration: duration
  })
}

/**
 * 转eth
 * @param {Number} value 需要被转换的值
 * @param {Number} num 需要保留的小数位数，默认5位小数
 */
export const toETH = (value, num = 5) => {
  return Math.floor(value / 1e18 * Math.pow(10, num)) / Math.pow(10, num)
}

// 格式化时间 2018-05-19T08:04:52.000+0000 -> 2018-05-19 08:04:52
export const format = (time, type) => {
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
  let timeout = null
  return function (func, time) {
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
export const Debounce = () => {
  let timeout
  return function (func, wait) {
    let context = this // 传给目标函数
    clearTimeout(timeout)
    timeout = setTimeout(
      () => { func.apply(context, arguments) }, wait)
  }
}

/**
 * 复制内容到剪贴板
 * @param {string} str 需要被复制的字符串内容
 */
export function copy (str) {
  document.addEventListener('copy', e => {
    e.clipboardData.setData('text/plain', str)
    e.preventDefault() // 阻止默认行为
  })
  document.execCommand('copy') // 使文档处于可编辑状态，否则无效
  Notification('success', '信息提示', '已复制到剪贴板')
}

export const getQueryString = (search = window.location.search,name) => { 
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

export function getQueryString2(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}