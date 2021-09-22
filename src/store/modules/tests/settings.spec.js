import settings from '../settings';
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        settings
    }
})

describe("settings", () => {
    it("should have default value", () => {
        expect(store.getters['settings/getIsDarkModeEnabled']).toBe(false);
    })
    it("should change dark mode to true", () => {
        store.commit('settings/setDarkModeEnabled', true);
        expect(store.getters['settings/getIsDarkModeEnabled']).toBeTruthy();
    })
})