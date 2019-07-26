import auth from 'api/auth'       // not useful ... maybe
import {
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REFRESH_BEGIN,
  REFRESH_FAILURE,
  REFRESH_SUCCESS,
  LOGOUT,
  SET_JWT,
} from './constants'
import ObtainToken from 'graphql/auth/ObtainToken.gql'
import RefreshToken from 'graphql/auth/RefreshToken.gql'
import store from '..'
import Vue from "vue"


const actions = {
  async login({commit}, {username, password}) {
    commit(LOGIN_BEGIN)
    let result, error_msg
    try {
      result = await store.dispatch('Models/simpleMutation',
        {query: ObtainToken, variables: {username, password}, bypassCache: true},
        {root: true}, // commit to global module (because we are in sub-module, need to add this ! DON'T REMOVE)
      ) // => {tokenAuth: {token: ...}}
      commit(SET_JWT, result.tokenAuth.token)
      store.dispatch('Auth/startRefreshJWT')   //  startRefreshing
      commit(LOGIN_SUCCESS)
    } catch (e) {   // GraphQL error: Please, enter valid credentials
      if (e.message.includes('Please, enter valid credentials')) {
        error_msg = "账户/密码错误"    // todo: Message the user that username is wrong.
      } else {
        error_msg = "未知错误"
      }
      commit(LOGIN_FAILURE, error_msg)
    }
  },

  async refreshJWT({commit}, token) {
    commit(REFRESH_BEGIN)
    let result, error_msg
    try {
      result = await store.dispatch('Models/simpleMutation',
        {query: RefreshToken, variables: {token}, bypassCache: true},
        {root: true},
      ) // => {refreshToken: {token, payload: { username, exp, origIat } }
      commit(SET_JWT, result.refreshToken.token)
      commit(REFRESH_SUCCESS)
    } catch (e) {   // GraphQL error: Signature has expired.
      if (e.message.includes('Signature has expired')) {
      } else {
        error_msg = "未知错误" // maybe network issue?
      }
      commit(LOGOUT)  // logout the user, and they have to login again. Clear all user-specific information.
      commit(REFRESH_FAILURE, error_msg)
      store.dispatch('Auth/stopRefreshJWT') // clearInterval
    }
  },

  startRefreshJWT(commit) {               // Refreshing JWT from server constantly
    if (!store.getters['Auth/token']) {return}   // don't setInterval if no token
    Vue.prototype.$refreshTokenInterval = setInterval(() => {
      console.log("Polling server...")
      let token = store.getters['Auth/token']
      store.dispatch('Auth/refreshJWT', token)   // must be root since binding to global object.
    }, 1000 * 20)  // debug: polling server every 20 sec.
  },

  stopRefreshJWT(commit) {
    // Stop refreshing
    clearInterval(Vue.prototype.$refreshTokenInterval)
  },


  logout({commit}) {
    return auth.logout()
      .then(() => commit(LOGOUT))
      .finally(() => commit(SET_JWT, null))
  },
}

const mutations = {
  [LOGIN_BEGIN](state) {
    state.authenticating = true
    state.error = false
    state.error_msg = null
  },
  [LOGIN_FAILURE](state, error_msg = null) {
    state.authenticating = false
    state.error = true
    state.error_msg = error_msg
  },
  [LOGIN_SUCCESS](state) {
    state.authenticating = false
    state.error = false
    state.error_msg = null
  },
  [LOGOUT](state) {
    // https://github.com/vuejs/vuex/issues/1118
    // todo: should clear all (personal) states here, and to be safe, the local storage
    state.authenticating = false
    state.error = false
    state.token = null
  },
  [SET_JWT](state, token = null) {    // set or clear JWT
    state.token = token
  },
  // below may be not useful.
  [REFRESH_BEGIN](state) {
    state.error = false
    state.error_msg = null
    state.refreshing = true
  },
  [REFRESH_SUCCESS](state) {
    state.error = false
    state.error_msg = null
    state.refreshing = false
  },
  [REFRESH_FAILURE](state, error_msg = null) {
    state.error = true
    state.error_msg = error_msg
    state.refreshing = false
  },
}

const Auth = {
  namespaced: true,

  state: {
    authenticating: false,
    refreshing: false,
    error: false,
    error_msg: null,
    token: null,
  },

  getters: {
    isAuthenticated: state => !!state.token,
    token: state => state.token,
  },

  actions,
  mutations,
}

export default Auth
