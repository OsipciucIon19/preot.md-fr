export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false,
        search: {},
        isSearchLoading: false
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading,
        getSearchSuggestions: (state) => state.search?.suggestions ?? [],
        getIsSearchLoading: (state) => state.isSearchLoading
    },
    actions: {
        async loadProducts(store, {link, page}) {
            store.commit('mutateIsLoading', true);

            let appender = link.includes('?') ? '&' : '?';
            let params = btoa(`${link}${appender}page=${page}`);

            const products = await fetch(`/api/products?linkBase64=${params}`);

            if (page > 1) {
                store.commit('mutateNewList', await products.json());
            } else {
                store.commit('mutateList', await products.json());
            }
            store.commit('mutateIsLoading', false);
        },
        async searchProducts(store, payload){
            store.commit('mutateIsSearchLoading', true);
            const result = await fetch(`/api/suggestions?query=${payload}`);
            store.commit('mutateSearchList', await result.json());
            store.commit('mutateIsSearchLoading', false);
        }
    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload;
        },
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateNewList(state, payload) {
            state.list = state.list.concat(payload);
        },
        mutateIsSearchLoading(state, payload){
            state.isSearchLoading = payload;
        },
        mutateSearchList(state, payload) {
            state.search = payload;
        },
    }
}