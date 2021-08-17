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
        }
    }
}