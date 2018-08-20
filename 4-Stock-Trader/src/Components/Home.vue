<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save &amp; Load your Data</p>
        <p>Click on 'End Day' to begin a new day!</p>
        <hr>
        <h2>Your Funds: ${{ fundsAvailable }}</h2>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'fundsAvailable'
            ])
        }
    }
</script>