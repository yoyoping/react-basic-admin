import React from 'react';
import { Link } from 'react-router-dom'
import { useStore } from '../../context/Index'
import { Button } from 'antd'

const Home_: React.FC<any> = () => {

  const [store, dispatch] = useStore();
  
  const setUser = () => {
    const userinfo = {name:'zhangping', age: 20, sex: 'man'}
    localStorage.setItem('userinfo', JSON.stringify(userinfo))
    dispatch({ type: 'SET_USERINFO', userinfo })
  }

  return (
    <>
      home
      <div>
        <p>
          <Link to='/mine'>我的</Link>
        </p>
        <p>
          <Link to='/list'>列表</Link>
        </p>
      </div>
      <p>---------------</p>
      <p>---------------</p>
      <div>
        <p>姓名：{store.userinfo.name}</p>
        <p>年龄：{store.userinfo.age}</p>
        <p>性别：{store.userinfo.sex}</p>
        <Button type='primary' onClick={setUser}>设置</Button>
      </div>
    </>
  )
}

export default Home_