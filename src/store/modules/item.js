export default {
    namespaced: true,
    state: {
        item: {},
        isLoading: false,
    },
    getters: {
        getItem: ({item}) => item
    },
    actions: {
        /* TODO:
        async loadItem(store, payload) {

        }*/
    },
    mutations: {
        mutateIsLoading(state, payload) {
            state.isLoading = payload
        },
        mutatteItem(state, payload) {
            state.item = payload
        }
    }
}