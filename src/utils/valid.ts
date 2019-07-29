/**
 * 只针对于输入antd的form做的valide验证
 */

import * as verify from './check'
/**
   * 验证账号
   *
   * @memberof DailyIncome
   */
export const isUser = (rule:any, value:string, callback:any) => {
  if (value && !verify.validsp_(value)) {
    callback('数字、26个英文字母 . - _')
  }
  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
  callback()
}

/**
   * 验证密码
   *
   * @memberof DailyIncome
   */
export const isPwd = (rule:any, value:string, callback:any) => {
  if (value && !verify.validsp_range(value)) {
    callback('6-20个字符（数字、26个英文字母 . - _）')
  }
  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
  callback()
}

export const IsNum = (rule:any, value:string, callback:any) => {
  if (value && !verify.IsNum2(value)) {
    callback('请输入大于0的数字！')
  }
  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
  callback()
}

// 验证手机号
export const phoneNumber = (rule:any, value:string, callback:any) => {
  if (value && !verify.phoneNumber(value)) {
    callback('请输入正确格式的手机号！')
  }
  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
  callback()
}

export const naturalNumber = (rule:any, value:string, callback:any) => {
  if (value && !/^[0-9]*$/.test(value)) {
    callback('请输入正确的数字格式！')
  }
  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
  callback()
}
