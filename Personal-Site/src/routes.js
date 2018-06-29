import Home from './components/Home.vue';
import Project from './components/Project.vue';
import MainPanelHome from './components/MainPanels/MainPanelHome.vue';
import MainPanelProject from './components/MainPanels/MainPanelProject.vue';


export const routes = [{
        name: 'home',
        path: '',        
        components: {
            default: Home,
            'main-panel': MainPanelHome
        }
    },
    {
        name: 'project',
        path: '/projects/:id',
        components: {
            default: Project,
            'main-panel': MainPanelProject
        }
    },
    { path: '*', redirect: '/' }
];