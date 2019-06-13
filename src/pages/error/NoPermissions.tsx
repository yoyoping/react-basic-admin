/**
 * 权限不足展示页面
 */
import React from 'react';
import './error.scss'

const NoPermissions: React.FC = () => {
  /**
   * 返回上一页
   * @memberof NoPermissions
   */
  const goback = () => {
    window.history.back()
  }
  return (
    <div className="error">
      <p className="pic noP"></p>
      <div className="action">
        <h2>403</h2>
        <p>抱歉，您无权访问该页面</p>
        <br />
        <button className="btn">返回首页</button>
        <button onClick={goback} className="goback btn">返回上一页</button>
      </div>
    </div>
  )
}

export default NoPermissions
