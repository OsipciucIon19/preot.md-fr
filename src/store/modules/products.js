export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false

    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
        getList(state) {
            return state.list;
        }

    },
    actions: {
        async loadProducts(store, {link, page}) {
            store.commit('mutateIsLoading', true);
            const products = await fetch(`/api/products?link=${link}?page=${page}`);
            store.commit('mutateList', await products.json());
            store.commit('mutateIsLoading', false);
        },

    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload;
        },
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        }
    }
}