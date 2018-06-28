import Home from './components/Home.vue';
import Project from './components/Project.vue';
import MainPanelHome from './components/MainPanels/MainPanelHome.vue';
import MainPanelProject from './components/MainPanels/MainPanelProject.vue';


export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'main-panel': MainPanelHome
        }
    },
    {
        path: '/projects/travel-alaska',
        components: {
            default: Project,
            'main-panel': MainPanelProject
        }
    },
    { path: '*', redirect: '/' }
];