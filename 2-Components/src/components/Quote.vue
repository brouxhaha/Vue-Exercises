<template>
    <li class="quote" @click="deleteQuote">
        <slot></slot>
    </li>
</template>

<script>
    import { quoteBus } from '../main';

    export default {
        data: function() {
            return {
                
            }
        },
        props: {
            index: {
                type: Number, 
                required: true
            }
        },
        methods: {
            deleteQuote() {
                quoteBus.$emit('quoteWasDeleted', this.index);
            }
        }
    }    
</script>

<style scoped>
    .quote {
        border: #340c45;
        color: #340c45;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 rgba(255, 0, 255, 0.5);
        margin-top: 20px;
        margin-left: 20px;
        cursor: pointer;
        flex: 1 1 300px;
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        line-height: 1.3;
    }
</style>
