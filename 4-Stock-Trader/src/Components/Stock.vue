<template>
    <div class="card__inner">
        <div class="card__top">
            <h2>{{ stock.name }} <span class="small">(Price: {{ stock.currentPrice }}<span v-if="this.portfolio"> | Quantity: {{ stock.quantity }}</span>)</span></h2>
            
        </div>
        <div class="card__bottom">
            <input type="number" name="quantity" id="quantity" v-model="quantity">
            <button class="button" v-if="this.portfolio" @click="sellStocks">Sell</button>
            <button class="button" v-else @click="buyStocks" v-model="quantity">Buy</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quantity: 0
            }
        },

        props: {
            stock: Object,
            portfolio: Boolean
        },

        methods: {
            buyStocks() {
                console.log(this.quantity);
                this.$store.commit('decreaseFunds', this.quantity * Number(this.stock.currentPrice));
                
                this.$store.commit('increaseStockQuantity', {stockName: this.stock.name, stockQuantity: Number(this.quantity)});

                this.quantity = 0;
            },

            sellStocks() {
                this.$store.commit('increaseFunds', this.quantity * this.stock.currentPrice)

                this.$store.commit('decreaseStockQuantity', 
                {stockName: this.stock.name, stockQuantity: this.quantity});

                this.quantity = 0;
            }
        }
    }
</script>