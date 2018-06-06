<template>
    <div class="quote-form">
        <h4>Add a Quote:</h4>
        <textarea class="quote-input" @keyup="updateText"></textarea>
        <p class="centered"><button class="button" @click="addQuote">Add Quote</button></p>
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
                if(textBox.value === ''){
                    alert('Please enter some text');
                } else {
                    if(this.quotes.length < 10){
                        quoteBus.addQuote(this.quoteText);
                        textBox.value = '';
                    } else {
                        alert('Please delete a quote before adding any more.');
                    }
                }
            }
        }
    }    
</script>

<style scoped>
    .quote-form {
        width: 50%;
        margin: 20px auto;
    }

    textarea {
        width: 100%;
        border: 1px solid #abcabc;
        border-radius: 4px;
    }

    .centered {
        text-align: center;
    }

    .button {
        border: 1px solid magenta;
        background: skyblue;
        color: #340c45;
        transition: all 0.3s ease;
    }

    .button:hover {
        background: rgb(177, 221, 239);
    }
</style>
