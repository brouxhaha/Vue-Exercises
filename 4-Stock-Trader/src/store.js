import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stocks: [{
                name: 'BMW',
                quantity: 0,
                currentPrice: 110
            },
            {
                name: 'Google',
                quantity: 0,
                currentPrice: 200
            },
            {
                name: 'Apple',
                quantity: 0,
                currentPrice: 250
            },
            {
                name: 'Twitter',
                quantity: 0,
                currentPrice: 8
            }
        ]
    },

    getters: {
        fundsAvailable: state => {
            return state.funds.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        },
        stocks: state => {
            return state.stocks;
        }
    },

    mutations: {
        increaseFunds: (state, payload) => {
            state.funds += payload;
        },

        decreaseFunds: (state, payload) => {
            state.funds -= payload;
        },

        increaseStockQuantity: (state, payload) => {
            var stock = state.stocks.filter(obj => {
                return obj.name === payload.stockName
            })[0];

            stock.quantity += payload.stockQuantity;
        },

        decreaseStockQuantity: (state, payload) => {
            var stock = state.stocks.filter(obj => {
                return obj.name === payload.stockName
            })[0];

            stock.quantity -= payload.stockQuantity;
        },

        endTradingDay: state => {
            state.stocks.forEach((stock) => {
                let randNum = Math.floor(Math.random() * (40 - 0 + 1)) + 0;

                stock.currentPrice = randNum > 20 ? Math.ceil(stock.currentPrice + (stock.currentPrice * (randNum / 100))) : Math.ceil(stock.currentPrice - (stock.currentPrice * (randNum / 100)));
            });
        }
    }
});