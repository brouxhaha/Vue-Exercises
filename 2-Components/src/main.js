import Vue from 'vue'
import App from './App.vue'

export const quoteBus = new Vue({
    methods: {
        addQuote(quote) {
            this.$emit('quoteWasAdded', quote);
        },
        deleteQuote(index) {
            this.$emit('quoteWasDeleted', index);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})