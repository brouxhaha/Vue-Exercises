import Home from './components/Home.vue';
import MainPanelHome from './components/MainPanels/MainPanelHome.vue';


export const routes = [{
        path: '',
        name: 'home',
        components: {
            default: Home,
            'main-panel': MainPanelHome
        }
    },
    { path: '*', redirect: '/' }
];