<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" :to="{ name: 'userEdit', params: {id: $route.params.id } }" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
    export default { 
        data() {
            return {
                name: 'userEdit',
                params: {
                    id: this.$route.params.id
                },
                hash: '#data'
            }
        },
        beforeRouteEnter(to, from, next){
            // do check to see if component should be loaded (ie: user is logged in, has credentials, etc.)
            if(true) {
                next();
            } else {
                next(false);
            }
            next();
        }
    }
</script>