import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stocks: {
            BMW: {
                'quantity': 0,
                'currentPrice': 110
            },
            Google: {
                'quantity': 0,
                'currentPrice': 200
            },
            Apple: {
                'quantity': 0,
                'currentPrice': 250
            },
            Twitter: {
                'quantity': 0,
                'currentPrice': 8
            }
        }
    }
});