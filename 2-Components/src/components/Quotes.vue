<template>
    <div>
        <ul v-if="this.quotes.length">
            <the-quote v-for="(quote, index) in this.quotes" :index="index">
                {{ quote }}
            </the-quote>
        </ul>
        <p v-else class="centered">There are no quotes to display. Please add a new quote.</p>
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

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: row wrap;
        margin-left: -20px;
        margin-top: -20px;
    }

    .centered {
        text-align: center;
    }
</style>
