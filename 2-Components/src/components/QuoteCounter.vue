<template>
    <div class="counter-total">
        <div class="counter" :style="calcWidth()"></div>
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

</style>
