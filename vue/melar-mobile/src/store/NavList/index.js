const NavList = { // 主页品类切换
  state: {
    navListActiveIndex: 0
  },
  mutations: {
    mutateNavListActiveIndex(state, data) {
      state.navListActiveIndex = data
    }
  },
  getters: {
    getNavListActiveIndex: state => {
      return state.navListActiveIndex
    }
  },
  actions: {
    setNavListActiveIndex: ({commit}, payload) => {
      commit('mutateNavListActiveIndex', payload)
    },
  },
}

export default NavList
