<template>
    <div>
        <h1>Stocks</h1> 
        <div class="cards">
            <div class="card" v-for="stock in stocks">
                <Stock :stock="stock" :portfolio="false"></Stock>
            </div>
        </div>   
    </div>    
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters([
                'stocks'
            ])

            // in setters, set viewPortfolio to false, set to true in portfolio
        },

        components: {
            Stock: Stock
        }
    }
</script>