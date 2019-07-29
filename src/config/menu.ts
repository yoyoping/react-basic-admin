const menulist = [
  {
    name: 'home',
    path: '/',
    icon: 'home',
    title: '首页'
  },
  {
    name: 'system',
    path: '/system',
    icon: 'setting',
    title: '系统管理',
    children: [
      {
        name: 'account',
        path: '/account',
        title: '账号管理',
      },
      {
        name: 'role',
        path: '/role',
        title: '角色管理',
      },
      {
        name: 'Permission',
        path: '/Permission',
        title: '权限管理',
      },
      {
        name: 'menu',
        path: '/menu',
        title: '菜单管理',
      },
      {
        name: 'log',
        path: '/log',
        title: '操作日志',
      }
    ]
  },
  {
    name: 'user',
    path: '/user',
    icon: 'switcher',
    title: '用户管理',
  },
  {
    name: 'component',
    path: '/component',
    icon: 'appstore',
    title: '组件管理',
    children: [
      {
        name: 'editor',
        path: '/editor',
        title: '富文本',
      },
      {
        name: 'upload',
        path: '/upload',
        title: '文件上传',
      },
      {
        name: 'drag',
        path: '/drag',
        title: '文件拖拽',
      },
      {
        name: 'city-link',
        path: '/city-link',
        title: '城市联动',
      }
    ]
  },
  {
    name: 'error-statistics',
    path: '/error-statistics',
    icon: 'pie-chart',
    title: '报错统计',
  }
]

export default menulist