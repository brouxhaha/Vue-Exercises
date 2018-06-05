<template>
    <div class="container">
        <quote-counter :quotes="quotes"></quote-counter>
        <quote-form :quotes="quotes" @quoteWasAdded="quote = this.value"></quote-form>
        <quotes-list></quotes-list>
    </div>
</template>

<script>
    import QuoteCounter from './components/QuoteCounter.vue';
    import QuoteForm from './components/QuoteForm.vue';
    import Quotes from './components/Quotes.vue';
    import { quoteBus } from './main';
    
    export default {
        data: function() {
            return {
                quotes: []
            }
        },

        components: {
            quoteCounter: QuoteCounter,
            quoteForm: QuoteForm,
            quotesList: Quotes
        },
        created() {
            quoteBus.$on('quoteWasAdded', (quote) => {
                this.quotes.push(quote);
                console.log(this.quotes);
            });
        }
    }
</script>

<style>
</style>
