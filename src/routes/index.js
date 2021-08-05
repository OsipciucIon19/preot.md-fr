import VueRouter from 'vue-router'
import Vue from 'vue'
import Products from "../components/pages/Products";
import Info from "../components/pages/Info";
import Contacts from "../components/pages/Contacts";
import Cart from "../components/pages/Cart";
import Settings from "../components/pages/Settings";
import Profile from "../components/pages/Profile";

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/products'},
    {path: '/products', component: Products},
    {path: '/info', component: Info},
    {path: '/contacts', component: Contacts},
    {path: '/cart', component: Cart},
    {path: '/settings', component: Settings},
    {path: '/profile', component: Profile},
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
