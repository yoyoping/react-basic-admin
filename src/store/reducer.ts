/**
 * 定义具体reducer
 * @param state 当前state
 * @param action action对象
 */
const reducer = (state:any, action:any) => {
  switch (action.type) {
    case 'SET_USERINFO':
      return { ...state, userinfo: action.userinfo }
    default:
      throw new Error('Unexpected action')
  }
};

export default reducer
