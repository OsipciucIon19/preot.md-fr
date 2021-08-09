export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading
    },
    actions: {
        async fetch({commit}) {
            commit('mutateIsLoading', true);
            const result = await fetch('/api/categories');
            commit('mutateList', await result.json());
            commit('mutateIsLoading', false);
        }
    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload
        },
        mutateIsLoading(state, payload) {
            state.isLoading = payload
        }
    }
}