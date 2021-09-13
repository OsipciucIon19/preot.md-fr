import auth from "../auth";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {auth}
})

describe('auth', () => {
    it('should have default value false', () => {
        expect(store.getters['auth/getIsAuthorised']).toBeFalsy()
    })

    it('should have default value an empty string', function () {
        expect(store.getters['auth/getUsername']).toMatch('')
    });

    it('should log in a new user', function () {
        const exampleUsername = 'test-username';

        store.dispatch('auth/login', exampleUsername)

        expect(store.getters['auth/getUsername']).toMatch(exampleUsername)
        expect(store.getters['auth/getIsAuthorised']).toBeTruthy()
    });

    it('should log out a user', function () {
        // store.commit('auth/mutateUsername', null)
        // store.commit('auth/mutateIsAuthorised', false)

        store.dispatch('auth/logout')

        expect(store.getters['auth/getUsername']).toBe(null)
        expect(store.getters['auth/getIsAuthorised']).toBeFalsy()
    });
})
