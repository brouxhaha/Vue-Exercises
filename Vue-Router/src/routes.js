import Home from './components/Home.vue';
import Header from './components/Header.vue';

// Lazy load these components only when needed
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};

const User = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};

const User = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};

const User = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};

export const routes = [
    {path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }},
    {path: '/user', component: User, components: {
        default: User,
        'header-bottom': Header
    }, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            next();
        }},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]},
    { path: '/redirect-me', redirect: '/user' }, /* can also use an object here and use a named route */
    { path: '*', redirect: '/' }
];