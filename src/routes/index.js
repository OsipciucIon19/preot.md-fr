import VueRouter from 'vue-router'
import Vue from 'vue'
import Dashboard from "../layouts/Dashboard";
import dashboardRoutes from "./dashboard"
import Auth from "../layouts/Auth";
import authRoutes from "./auth"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/products"
    },
    {
        name: "products",
        path: "/products",
        component: Dashboard,
        children: dashboardRoutes,
    },
    {
        path: "/login",
        component: Auth,
        children: authRoutes
    },
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
