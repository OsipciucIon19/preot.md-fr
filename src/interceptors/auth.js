import api from "../api/api";
import store from "../store"

api.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {token: store.getters["auth/getUsername"]}
    }
}, (error) => {
    return Promise.reject(error)
})