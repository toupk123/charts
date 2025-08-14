/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/instrument',
    name: 'instrument',
    icon: 'crown',
    routes: [
      {
        path: '/instrument',
        redirect: '/instrument/settings',
      },
      {
        path: '/instrument/settings',
        name: 'settings',
        component: './Instrument/Settings/index',
      },
      {
        path: '/instrument/status',
        name: 'status',
        component: './Instrument/Status/index',
      },
    ],
  },
  {
    path: '/configuration',
    name: 'configuration',
    icon: 'crown',
    routes: [
      {
        path: '/configuration',
        redirect: '/configuration/settings',
      },
      {
        path: '/configuration/settings',
        name: 'settings',
        component: './Configuration/Settings/index',
      },
      {
        path: '/configuration/type',
        name: 'type',
        component: './Configuration/Type/index',
      },
      {
        path: '/configuration/config',
        name: 'config',
        component: './Configuration/Config/index',
      },
    ],
  },
  {
    path: '/data',
    name: 'data',
    icon: 'crown',
    routes: [
      {
        path: '/data',
        redirect: '/data/realTime',
      },
      {
        path: '/data/realTime',
        name: 'realTime',
        component: './Data/RealTime/index',
      },
      {
        path: '/data/summary',
        name: 'summary',
        component: './Data/Summary/index',
      },
      {
        path: '/data/report',
        name: 'report',
        component: './Data/Report/index',
      },
      {
        path: '/data/summaryReport',
        name: 'summaryReport',
        component: './Data/SummaryReport/index',
      },
      {
        path: '/data/history',
        name: 'history',
        component: './Data/History/index',
      },
    ],
  },
  {
    path: '/analysis',
    name: 'analysis',
    icon: 'crown',
    routes: [
      {
        path: '/analysis',
        redirect: '/analysis/vibrate',
      },
      {
        path: '/analysis/trend',
        name: 'trend',
        component: './Analysis/Trend/index',
      },
      {
        path: '/analysis/vibrate',
        name: 'vibrate',
        component: './Analysis/Vibrate/index',
      },
      {
        path: '/analysis/diagnosis',
        name: 'diagnosis',
        component: './Analysis/Diagnosis/index',
      },

    ],
  },
  {
    path: '/basic',
    name: 'basic',
    icon: 'crown',
    routes: [
      {
        path: '/basic',
        redirect: '/basic/instrumentType',
      },
      {
        path: '/basic/instrumentType',
        name: 'instrumentType',
        component: './Basic/InstrumentType/index',
      },
      {
        path: '/basic/bearing',
        name: 'bearing',
        component: './Basic/Bearing/index',
      },
      {
        path: '/basic/unit',
        name: 'unit',
        component: './Basic/Unit/index',
      },

    ],
  },

  {
    path: '/system',
    name: 'system',
    icon: 'crown',
    routes: [
      {
        path: '/system',
        redirect: '/system/organization',
      },
      {
        path: '/system/organization',
        name: 'organization',
        component: './System/Organization/index',
      },
      {
        path: '/system/user',
        name: 'user',
        component: './System/User/index',
      },
      {
        path: '/system/role',
        name: 'role',
        component: './System/Role/index',
      },
      {
        path: '/system/settings',
        name: 'settings',
        component: './System/Settings/index',
      },
      {
        path: '/system/log',
        name: 'log',
        component: './System/Log/index',
      },
      
    ],
  },


  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
