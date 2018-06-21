import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    /* gettters allow us to access the state */
    getters,
    /* mutations are methods that allow us to change the state */
    mutations,
    /* actions allow us to commit mutations */
    actions,

    modules: {
        counter
    }
});