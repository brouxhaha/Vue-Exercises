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
        components: {
            AppHeader: AppHeader
        }
    }
</script>

<style>
    
</style>
