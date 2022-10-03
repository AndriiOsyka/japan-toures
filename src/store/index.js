import { createStore } from 'vuex'

export default createStore({
  state: {
    guides: []
  },
  getters: {
    getGuides (state) {
      return state.guides
    }
  },
  mutations: {
    SET_GUIDES: (state, guides) => {
      state.guides = guides
    }
  },
  actions: {
    async GET_GUIDES_FROM_API ({ commit }) {
      const guides = await ((await fetch('https://sandbox.musement.com/api/v3/lists')).json())
      commit('SET_GUIDES', guides)
    }
  },
  modules: {
  }
})
