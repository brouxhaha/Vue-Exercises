import Home from './components/Home.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';
import MainPanelHome from './components/MainPanels/MainPanelHome.vue';
import MainPanelAbout from './components/MainPanels/MainPanelAbout.vue';
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
        name: 'about',
        path: '/about',
        components: {
            default: About,
            'main-panel': MainPanelAbout
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