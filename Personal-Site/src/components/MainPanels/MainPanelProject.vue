<template>
    <div class="home__about">
        <div class="home__greeting">
            <h1 class="centered">{{ getProjects[id].name }}</h1>
        </div>
        <div class="home__portrait">
            <img :src="getProjects[id].homeImg">
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },

        computed: {
            ...mapGetters([
                'projects'
            ])
        }
    }
</script>