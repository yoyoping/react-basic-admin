/**
 * 定义初始状态
 */

const userinfo: string = localStorage.getItem('userinfo') || '{}'

const initialState = {
  userinfo: JSON.parse(userinfo) // 用户信息
};

export default initialState