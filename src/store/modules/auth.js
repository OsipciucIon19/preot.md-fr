export default {
    namespaced: true,
    state: {
        isAuthorised: false
    },
    getters: {
        getIsAuthorised(state) {
            return state.isAuthorised
        }
    },
    actions: {
        login(store, {username}) {
            store.commit('mutateUsername', username);
            store.commit('mutateIsAuthorised', true);
        },
        logout(store) {
            store.commit('mutateUsername', null);
            store.commit('mutateIsAuthorised', false);
        }
    },
    mutations: {
        mutateIsAuthorised(store, payload) {
            store.isAuthorised = payload;
        },
        mutateUsername(store, payload) {
            store.username = payload;
        }
    }
}