<template>
    <div>
        <ul v-if="this.quotes.length">
            <the-quote v-for="quote in this.quotes">
                {{ quote }}
            </the-quote>
        </ul>
        <p v-else>There are no quotes to display. Please add a new quote.</p>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    
    export default {
        data: function() {
            return {
                
            }
        },
        props: {
            quotes: {
                type: Array,
                required: true
            }
        },
        components: {
            theQuote: Quote
        }
    }    
</script>