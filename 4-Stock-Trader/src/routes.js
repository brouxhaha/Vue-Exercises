import Home from './Components/Home.vue';
import Portfolio from './Components/Portfolio.vue';
import Stocks from './Components/Stocks.vue';

export const routes = [{
    name: 'Home',
    path: '',
    components: {
        default: Home
    },

    {
        name: 'Portfolio',
        path: '/portfolio',
        components: {
            default: Portfolio
        }
    },

    {
        name: 'Stocks',
        path: '/stocks',
        components: {
            default: Stocks
        }
    },
    
    {path: '*', redirect: '/'}
}];