
export default {
    namespaced: true,
    state: {
        item: {},
        isLoading: false,
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
        getItem: ({item}) => item
    },
    actions: {
        async loadItem(store, payload) {
            store.commit('mutateIsLoading', true);

            const item = await fetch(`/api/item?link=/ru/${payload}`);

            store.commit('mutateItem', await item.json());

            store.commit('mutateIsLoading', false);
        }
    },
    mutations: {
        mutateIsLoading(state, payload) {
            state.isLoading = payload
        },
        mutateItem(state, payload) {
            state.item = payload
        }
    }
}