<template>
    <div>
        <h1>Your Portfolio</h1>
        <div class="cards">
            <div class="card" v-for="stock in stocks">
                <Stock v-if="stock.quantity" :stock="stock" :portfolio="true"></Stock>
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
        },
        components: {
            Stock: Stock
        }
    }
</script>