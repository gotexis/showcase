import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL from '@vuex-orm/plugin-graphql'
import VuexORMLocalForage from 'vuex-orm-localforage'  // this may not be what i think it is
import database from 'models'
import createPersistedState from 'vuex-persistedstate'
import NavList from './NavList'
import Presentation from './Presentation'
import Cart from './Cart'
import Auth from './Auth'
import {getHeaders} from "../apollo"

// ---------------------- initialisation code -------------------------------------


VuexORM.use(VuexORMLocalForage, {database})
VuexORM.use(VuexORMGraphQL, {
  database,
  debug: process.env.NODE_ENV !== 'production',
  // below is repeated.
  url: 'http://127.0.0.1/graphql/',
  credentials: 'include',
  headers: getHeaders,
  connectionQueryMode: 'edges',
})


Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  plugins: [
    VuexORM.install(database, {namespace: 'Models'}),
    createPersistedState({
      // https://github.com/robinvdvleuten/vuex-persistedstate      // partially persist state
      paths: [
        'Presentation',
        'NavList',
        'Cart',
        'Auth',
        'Models'
      ]
    })
  ],
  modules: {
    Presentation,
    Cart,
    NavList,
    Auth,
  }
})

export default store
