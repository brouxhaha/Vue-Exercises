<template>
    <div class="home__about">
        <div class="home__greeting">
            <h1 class="centered">{{ currentProject.name }}</h1>
        </div>
        <div class="home__portrait">
            <img :src="currentProject.homeImg">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                projectIndex: this.$route.params.index
            }
        },

        computed: {
            projects() {
                return this.$store.state.projects;
            },
            currentProject(){
                return this.projects.filter((obj) => {
                    return obj.id == this.id;
                })[0];
            }
        }
    }
</script>