import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"

export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/melar-demo' : '/'

const router = new Router({
  mode: 'hash',
  base: BASE_PATH,
  // when using history mode, need to configure Caddy/Nginx to proxy pass all routes to the base URL.
  routes: [
    {
      path: '/playground', // helper view for development
      name: 'playground',
      component(resolve) {
        require(['views/playground'], resolve)
      }
    },
    // {
    //   path: '/class', // helper view for development
    //   name: 'class',
    //   component(resolve) {
    //     require(['views/class_example/index.ts'], resolve)
    //   }
    // },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component(resolve) {
        require(['views/home'], resolve)
      },
      meta: {menu: true}
    },
    {
      path: '/classification',
      name: 'classification',
      component(resolve) {
        require(['views/classification'], resolve)
      },
      meta: {menu: true}
    },
    {
      path: '/cart',
      name: 'cart',
      component(resolve) {
        require(['views/cart'], resolve)
      },
      meta: {menu: true}
    },
    {
      path: '/mine',
      name: 'mine',
      component(resolve) {
        require(['views/mine'], resolve)
      },
      meta: {menu: true}
    },
    {
      path: '/search',
      name: 'search',
      component(resolve) {
        require(['views/search'], resolve)
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component(resolve) {
        require(['views/detail'], resolve)
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component(resolve) {
        require(['views/pay'], resolve)
      },
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component(resolve) {
        require(['views/login'], resolve)
      },
      meta: {requiresNotAuth: true}
    },
    {
      path: '/error',
      name: 'error',
      component(resolve) {
        require(['views/error'], resolve)
      },
      children: [
        {
          path: '404',
          name: 'error-404',
          component(resolve) {
            require(['views/error/404'], resolve)
          }
        },
        {
          path: '110',
          name: 'error-110',
          component(resolve) {
            require(['views/error/110'], resolve)
          }
        },
      ]
    },
    // 404 Not found
    {
      path: '*',
      redirect: {name: 'error-404'}
    }
  ]
})

// make a list of all menu item names (meta: menu = true)
const menu = router.options.routes.filter((route) => {
  try {
    return route.meta.menu === true
  } catch (e) {
  }
})

export const MENU = menu.map(i => i.name)

Vue.use(Router)

// ALLOWED_HOSTS
const domainCross = [
  '127.0.0.1:8080',
  '10.0.75.1:8080',
  'localhost:8080',
  '127.0.0.1:8081',
  '10.0.75.1:8081',
  'localhost:8081',
  'gotexis.github.io',
]

// openPage function is defined here
Router.prototype.openPage = function (path, query) {
  this.push({
    path,
    query
  })
}

router.beforeEach((to, from, next) => {

  let n

  // Loading status
  store.commit('Presentation/MUTATE_STATUS', 'loading')

  // ALLOWED_HOSTS
  if (!domainCross.includes(location.host)) {    // ES7 syntax
    if (to.name !== 'error-110') {               // prevent redirect loop
      n = {name: 'error-110'}
    }
  }

  // Auth only page - as per https://github.com/superman66/vue-axios-github
  if (to.meta.requiresAuth) {                   // 判断该路由是否需要登录权限
    if (!store.getters['Auth/isAuthenticated']) {
      n = {
        name: 'login',                          // xiaomi: an external (backend) url
        query: {redirect: to.fullPath}          // 将跳转的路由path作为参数，登录成功后跳转到该路由
      }
    }
  }

  if (to.meta.requiresNotAuth) {               // return to home page
    if (store.state.token) {
      n = {
        name: 'home',
      }
    }
  }

  // if all check passed
  next(n)          // here we call next only once to prevent back button fails... (multiple redirect)
})

// eslint-disable-next-line
router.afterEach((to, from, next) => {
  store.commit('Presentation/MUTATE_STATUS', 'end')

  setTimeout(() => {
    store.commit('Presentation/MUTATE_STATUS', 'hide')
  }, 900)

  setTimeout(() => {
    store.commit('Presentation/MUTATE_STATUS', 'normal')
  }, 1000)

})

export default router
