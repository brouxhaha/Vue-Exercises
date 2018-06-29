import Vue from 'vue';
import Vuex from 'vuex';
//import projects from './modules/projects';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        projects: [{
                id: 'travel-alaska',
                name: 'State of Alaska & Alaska Travel Industry Association',
                description: '',
                homeImg: '/src/assets/travel-alaska_initial_2000x1200.jpg'
            },
            {
                id: 'anchorage-library',
                name: 'Anchorage Public Library',
                description: '',
                homeImg: '/src/assets/anchorage-library_initial_2000x1200.jpg'
            },
            {
                id: 'visit-ketchikan',
                name: 'City of Ketchikan',
                description: '',
                homeImg: '/src/assets/visit-ketchikan_initial_2000x1200.jpg'
            },
            {
                id: 'anchorage-museum',
                name: 'Anchorage Museum',
                description: '',
                homeImg: '/src/assets/anchorage-museum_initial_2000x1200.jpg'
            }
        ]
    }
});