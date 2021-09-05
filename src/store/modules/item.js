import {fetchData} from "../../api/999";

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

            let item = fetchData.item(`/ru/${payload}`);
            item = (await item).data

            store.commit('mutateItem', item);
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