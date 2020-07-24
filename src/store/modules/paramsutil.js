export default {
  namespaced: true,
  state: {
    argsPageIndex: '',
    argsPageSize: '',
    argsCate: '',
    argsId: ''
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
    },
    updateargsId (state, args) {
      state.argsId = args
    }
  }
}
