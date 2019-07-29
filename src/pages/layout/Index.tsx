import React, { useState } from 'react'
import PrivateRoute from '../../components/privateRoute/Index'
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'
import menulist from '../../config/menu'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Layout_: React.FC<any> = (props) => {

  let location: any = props.location
  const NAME = location.pathname.split('/')
  const [collapsed, setCollapsed] = useState(false)
  const [currentMenu] = useState([NAME[1] || 'home'])

  /**
   * 展开/隐藏左侧侧边栏
   */
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Layout className="layout layoutMain" style={{ minWidth: '1400px' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className={collapsed ? 'logo small' : 'logo'}>
            <img src="/images/logo.png" alt="" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={currentMenu}>

            {/* 循环遍历菜单列表 */}
            {
              menulist.map((item: any) => {
                return (
                  (item.children && item.children.length > 0) ?
                    <SubMenu
                      key={item.name}
                      title={
                        <span>
                          <Icon type={item.icon} theme="filled" />
                          <span>{item.title}</span>
                        </span>
                      }
                    >
                      {
                        item.children.map((subItem: any) => {
                          return (
                            <Menu.Item key={subItem.name}>
                              <Link to={subItem.path}>
                                <span>{subItem.title}</span>
                              </Link>
                            </Menu.Item>
                          )
                        })
                      }
                    </SubMenu> :
                    <Menu.Item key={item.name}>
                      <Link to={item.path}>
                        <Icon type={item.icon} theme="filled" />
                        <span>{item.title}</span>
                      </Link>
                    </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row type="flex" justify="space-between">
              <Col span={2}>
                <Icon
                  className="trigger"
                  type={collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={toggle}
                />
              </Col>
              <Col span={2}>
                {/* <Mine /> */}
              </Col>
            </Row>
          </Header>
          <Content className="dfnContent" style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <PrivateRoute />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Layout_
