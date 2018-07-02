import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
    /*,
        scrollBehavior (to, from, savedPosition) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ x: 0, y: 0 })
                }, 500)
            })
        }*/
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})