<template>
    <div>
        <h3>Edit the User</h3>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <div id="data">Some Extra Data</div>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                confirmed: false
            }
        },
        beforeRouteLeave(to, from, next) {
            if(this.confirmed) {
                next();
            } else {
                if(confirm('Are you sure?')){
                    next();
                } else {
                    next(false);
                }
            }
            next();
        }
    }
</script>