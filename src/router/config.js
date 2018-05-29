import asyncComponent from './asyncComponent'
import NotFound from 'pages/Error/404'
// const _import_components = file => asyncComponent(() => import(`components/${file}`))
const _import_pages = file => asyncComponent(() => import(`pages/${file}`))

//含Layout视图
export const loyoutRouterMap = [
    { 
        path: '/', 
        name: '首页', 
        exact: true,
        component: _import_pages('Home')
    },
    { 
        path: '/personal',
        name: '个人中心',
        auth: true,
        component: _import_pages('Personal')
    }
] 

// 不含Layout视图
export const notLoyoutRouterMap = [
    { 
        path: '/404', 
        name: '404', 
        component: NotFound
    },
    { 
        path: '/login', 
        name: '登陆', 
        component: _import_pages('Login')
    }
]

// 所有视图
export const routes = loyoutRouterMap.concat(notLoyoutRouterMap)