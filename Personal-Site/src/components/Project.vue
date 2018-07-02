<template>
    <div class="panel panel--odd">
        <div class="content">
            <p v-html="currentProject.description">{{ currentProject.description }}</p>
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