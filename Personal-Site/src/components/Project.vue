<template>
    <div>
        <div class="panel panel--odd">
            <div class="content">
                <div class="intro" v-html="currentProject.description">{{ currentProject.description }}</div>
                <p class="centered"><a :href="`${currentProject.website}`" class="button">View Live Site</a></p>
            </div>
        </div>
        <div class="panel" v-for="(image, index) in currentProject.projectImgs" :key="index" :class="index % 2 === 0 ? 'panel--even' : 'panel--odd'">
            <div class="content">
                <img :src="`/src/assets/${currentProject.id}${image}.jpg`">
            </div>
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
            projects(){
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

<style>
    .content {
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;
        width: 90%;
    }

    @media (min-width: 600px){
        .intro {
            font-size: 1.25rem;
        }
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        animation: fade-in 0.2s ease-in forwards;
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-leave-active {
        animation: fade-out 0.2s ease-out forwards;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        
        to {
            opacity: 0;
        }
    }
</style>