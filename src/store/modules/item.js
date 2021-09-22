import {fetchItem} from "../../api/999";

export const state = {
    item: {},
    isLoading: false
}

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

            let item = fetchItem(`/ru/${payload}`);
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