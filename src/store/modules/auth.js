export default {
    namespaced: true,
    state: {
        isAuthorised: false,
        username: ''
    },
    getters: {
        getIsAuthorised(state) {
            return state.isAuthorised
        },
        getUsername(state) {
            return state.username
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