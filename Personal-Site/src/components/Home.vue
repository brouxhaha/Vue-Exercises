<template>
    <div class="panel panel--odd">
        <h2 class="panel__heading">Work</h2>
    </div>
    <!--<Projects></Projects>-->
</template>

<script>
    /*import Projects from './components/projects/Projects.vue'

    export default {
        components: {
            Projects: Projects
        }
    }*/
</script>

<style lang="sass">
    $black: #282828;
    $main-cool: #151e30;
    $main-warm: #ff9600;
    $alt-cool: #2a7f70;

    body {
        color: white;
    }

    .panel--main {
        background: rgba($main-cool, 0.75);
    }

    .panel {
        padding-top: 70px;
        padding-bottom: 150px;
    }

    .panel--odd {
        background: rgb(21,30,48);
        background: linear-gradient(180deg, rgba(21,30,48,0.75) 0%, rgba(42,127,112,0.75) 100%);
        min-height: 500px;
    }

    .panel--even {
        background: rgb(21,30,48);
        background: linear-gradient(180deg, rgba(21,30,48,0.75) 0%, rgba(42,127,112,0.75) 100%);
    }

    .panel__heading {
        font-size: 5rem;
        font-weight: 900;
        line-height: 0.8;
        color: rgba(white, 0.5);
        text-transform: uppercase;
        margin-top: 0;
        position: relative;

        &:after {
            content: '';
            height: 6px;
            width: 55%;
            background: $main-warm;
            //background: linear-gradient(90deg, #ff9600 32.15%, transparent 32.15%, transparent 35.37%, #ff9600 35.37%, #ff9600 40.19%, transparent 40.19%, transparent 42.12%, #ff9600 42.12%, #ff9600 45.34%, transparent 45.34%, transparent 46.62%, #ff9600 46.62%, #ff9600 48.23%, transparent 48.23%, transparent 49.04%, #ff9600 49.04%, #ff9600 50%, #ff9600 50%, #ff9600 82.15%, transparent 82.15%, transparent 85.37%, #ff9600 85.37%, #ff9600 90.19%, transparent 90.19%, transparent 92.12%, #ff9600 92.12%, #ff9600 95.34%, transparent 95.34%, transparent 96.62%, #ff9600 96.62%, #ff9600 98.23%, transparent 98.23%, transparent 99.04%, #ff9600 99.04%, #ff9600 100%) no-repeat left center;
background: rgb(255,150,0);
background: linear-gradient(90deg, rgba(255,150,0,1) 0%, rgba(255,150,0,1) 60%, rgba(255,150,0,0) 60%, rgba(255,150,0,0) 65%, rgba(255,150,0,1) 65%, rgba(255,150,0,1) 75%, rgba(255,150,0,0) 75%, rgba(255,150,0,0) 79%, rgba(255,150,0,1) 79%, rgba(255,150,0,1) 87%, rgba(255,150,0,0) 87%, rgba(255,150,0,0) 90%, rgba(255,150,0,1) 90%, rgba(255,150,0,1) 93%, rgba(255,150,0,0) 93%, rgba(255,150,0,0) 96%, rgba(255,150,0,1) 96%, rgba(255,150,0,1) 98%, rgba(255,150,0,0) 98%);
            background-size: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            //box-shadow: 20px 0 0 3px $main-warm;
        }
    }
</style>
