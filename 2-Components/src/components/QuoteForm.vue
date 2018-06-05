<template>
    <div>
        <h4>Add a Quote:</h4>
        <textarea class="quote-input" @keyup="updateText"></textarea>
        <button class="button" @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
    import { quoteBus } from '../main';

    export default {
        data: function() {
            return {
                quoteText: ''
            }
        },
        props: {
            quotes: {
                type: Array,
                required: true
            }
        },
        methods: {
            updateText() {
                this.quoteText = event.target.value;
                //console.log(this.quoteText);
            },

            addQuote() {
                var textBox = document.querySelector('textarea');
                quoteBus.addQuote(this.quoteText);
                textBox.value = '';
            }
        }
    }    
</script>