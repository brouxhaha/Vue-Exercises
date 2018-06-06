<template>
    <div class="counter-total">
        <div class="counter" :style="calcWidth()"></div>
        <div class="count">
            {{ this.quotesNumber }} / {{ this.maxQuotes }}
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                maxQuotes: 10
            }
        },
        props: {
            quotesNumber: {
                type: Number,
                required: true
            }
        },
        methods: {
            calcWidth() {
                return 'width: ' + (this.quotesNumber * 10) + '%';
            }
        }
    }    
</script>

<style scoped>
    .counter-total {
        height: 30px;
        border-radius: 3px;
        border: 1px solid #444444;
        background: #dedede;
        position: relative;
    }

    .counter {
        width: 0;
        height: 20px;
        transition: all 0.3s ease;
        background: #bada55;
        position: absolute;
        top: 5px;
        box-shadow: 0 1px 2px 1px rgba(40,40,40,0.5);
        z-index: 0;
    }

    .count {
        width: 100%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        font-family: 'PT Sans', Roboto, Helvetica;
        font-weight: bold;
        position: relative;
    }
</style>
