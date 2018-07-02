<template>
    <div class="project__about">
        <div class="project__title"><h1 class="project__heading">{{ currentProject.name }}</h1></div>
        <div class="project__initial-screen">
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

<style lang="sass">
    .project__about {
        display: grid;
        grid-gap: 50px;
        align-items: center;
        max-width: 1050px;
        margin: 0 auto;

        @media (min-width: 600px){
            grid-template-columns: 1fr 1fr;
        }
    }

    .project__heading {
        font-size: 1.5rem;
        margin: 0;
        
        @media (min-width: 600px){
            font-size: 2rem;
        }
    }
</style>
