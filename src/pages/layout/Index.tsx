import React from 'react'
import PrivateRoute from '../../components/privateRoute/Index'

const Layout_: React.FC = () => {
  return(
    <>
      <p>头部-（不变的公用部分）</p>
      <PrivateRoute />
    </>
  )
}

export default Layout_
