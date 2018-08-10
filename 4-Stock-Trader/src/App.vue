<template>
    <div class="container">
        <app-header></app-header>
        <transition name="slide-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import AppHeader from './Components/Header.vue'
    export default {

    }
</script>

<style>

</style>
