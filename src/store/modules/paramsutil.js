export default {
  namespaced: true,
  state: {
    argsPageIndex: '',
    argsPageSize: '',
    argsCate: ''
  },
  mutations: {
    updateargsPageIndex (state, args) {
      state.argsPageIndex = args
    },
    updateargsPageSize (state, args) {
      state.argsPageSize = args
    },
    updateargsCate (state, args) {
      state.argsCate = args
    }
  }
}
