<template>
    <div class="counter-total">
        <div class="counter" :style="calcWidth()"></div>
        <div class="count">
            {{ quotesNumber }} / {{ maxQuotes }}
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                
            }
        },
        props: {
            quotesNumber: {
                type: Number,
                required: true
            },
            maxQuotes: {
                type: Number,
                required: true
            }
        },
        methods: {
            calcWidth() {
                return 'transform: scaleX(' + (this.quotesNumber / this.maxQuotes) + ')';
            }
        }
    }    
</script>

<style scoped>
    .counter-total {
        height: 30px;
        border-radius: 3px;
        box-shadow: 0 0 0 1px #444444;
        background: #dedede;
        position: relative;
        overflow: hidden;
    }

    .counter {
        width: 100%;
        height: 30px;
        transition: all 0.3s ease;
        background: #bada55;
        position: absolute;
        top: 0;
        z-index: 0;
        transform-origin: left center;
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
