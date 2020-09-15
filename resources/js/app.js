/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

// import components
Vue.component("layout", require("./components/Layout.vue").default);

import VueRouter from "vue-router";
import Quasar from "quasar";
import Vuex from "vuex";
import { Cookies } from 'quasar'

Vue.use(Vuex);
Vue.use(Quasar);
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./components/Login.vue")
    },
    {
        path: "/quotes",
        name: "quotes",
        component: () => import("./components/Quotes.vue"),
        meta: { requiresAuth: true }
    }
];

const store = new Vuex.Store({
    state: {
        authenticated: Cookies.has("authenticated") ? true : false
    },
    getters: {
        loggedIn: state => state.authenticated
    },
    mutations: {
        loggedIn (state) {
            Cookies.set("authenticated", true)
            state.authenticated = true
        },
        loggedOut (state) {
            Cookies.remove("authenticated")
            state.authenticated = false;
        }
    }
});

const router = new VueRouter({
    routes
});

// deal with authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.loggedIn) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    store
}).$mount("#q-app");
