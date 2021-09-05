import {fetchData} from "../../api/999";

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

            let result = fetchData.categories();
            result = (await result).data;

            commit('mutateList', result);
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