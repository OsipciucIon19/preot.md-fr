import settings from "../settings";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
     modules: {settings}
})

jest.mock('../../../api/999', () => ({
    testFunction: jest.fn()
}))

describe("settings", () => {
    it("should have default value false", () => {
        expect(store.getters['settings/getIsDarkModeEnabled']).toBe(false)
    });

    it("should change dark mode to true", () => {
        store.commit('settings/setDarkModeEnabled', true)
        expect(store.getters['settings/getIsDarkModeEnabled']).toBeTruthy()
    })
})