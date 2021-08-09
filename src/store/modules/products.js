export default {
    namespaced: true,
    state: {
        list: {},
        isLoading: false
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading
    },
    actions: {
        async loadProducts(store, payload) {
            store.commit('mutateIsLoading', true);
            const result = await fetch(`/api/products?link=${payload}`);
            store.commit('mutateList', await result.json());
            store.commit('mutateIsLoading', false);
        },

    },
    mutations: {
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateList(state, payload) {
            state.list = payload
        },
    }
}