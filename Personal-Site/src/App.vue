<template>
    <div class="container">
        <div class="panel panel--main">
            <app-header></app-header>
            <div class="wrapper">
                <router-view name="main-panel"></router-view>
            </div>
        </div>
        <main class="content--main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style lang="sass">
    @import './scss/reset.scss';


/* #Site Specific
================================================== */
$black: #282828;
$main-cool: #151e30;
$main-warm: #ff9600;
$alt-cool: #2a7f70;

html {
    --black: #282828;
    --main-warm: #FF9600;
    --main-cool: #151E30;
    --alt-cool: #2A7F70;
    /*rgb: 21, 30, 48*/
    font-family: 'pragmatica';
    color: var(--black);
    background: rgba($main-cool, 0.75);
    line-height: 1.4;
}

a {
    text-decoration: none;
    color: white;
    position: relative;
    -webkit-transition: all .25s ease-in;
    transition: all .25s ease-in;
    font-weight: bold;
}

img {
    width: auto;
    height: auto;
    max-width: 100%;
}

.wrapper {
    margin: 0 auto;
    width: 90%;
}
</style>