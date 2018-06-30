<template>
    <div class="panel panel--odd">
        <p v-html="currentProject.description">{{ currentProject.description }}</p>
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