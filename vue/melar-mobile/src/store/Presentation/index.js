const Presentation = {        // Global component for visual presentations (Loading bar, show/hide footers)
  namespaced: true,
  state: {
    statusBar: 'loading',
    footerHide: false,
  },
  mutations: {
    MUTATE_STATUS(state, data) {
      state.statusBar = data
    },
    MUTATE_FOOTER_HIDE(state, data) {
      state.footerHide = data
    }
  },
  getters: {
    statusBar: state => {
      return state.statusBar
    },
    footerHide: state => {
      return state.footerHide
    },
  },
  actions: {
    setNowStatus: ({commit}, payload) => {
      commit('MUTATE_STATUS', payload)
    },
    setFooterHide: ({commit}, payload) => {
      commit('MUTATE_FOOTER_HIDE', payload)
    }
  }
}

export default Presentation
