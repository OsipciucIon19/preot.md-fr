import VueRouter from 'vue-router'
import Vue from 'vue'
import Products from "../components/pages/Products";
import Info from "../components/pages/Info";
import Contacts from "../components/pages/Contacts";
import Cart from "../components/pages/Cart";
import Settings from "../components/pages/Settings";
import Profile from "../components/pages/Profile";
import ProductDetails from "../components/pages/ProductDetails";

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/products'},
    {name:'products', path: '/products', component: Products, props: (routes) => ({link: routes.query.link})},
    {name:'info', path: '/info', component: Info},
    {name:'contacts', path: '/contacts', component: Contacts},
    {name:'cart', path: '/cart', component: Cart},
    {name:'settings', path: '/settings', component: Settings},
    {name:'profile', path: '/profile', component: Profile},
    {name:'item', path: '/item/:id', component: ProductDetails, props: true},
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
