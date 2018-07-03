<template>
    <div class="container">
        <div class="panel--main relative">
            <img src="./assets/triangle.svg" class="header__svg">
            <app-header></app-header>
            <div class="wrapper relative">
                <transition name="grow" mode="out-in">
                    <router-view name="main-panel"></router-view>
                </transition>
            </div>
        </div>
        <main class="content--main">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
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

    .header__svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
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

    .grow-enter {
        transform: scale(0);
    }

    .grow-enter-active {
        animation: grow-in 0.2s ease-in forwards;
    }

    .grow-leave {
        transform: scale(1);
        transform-origin: 50%;
    }

    .grow-leave-active {
        animation: grow-out 0.2s ease-out forwards;
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

    @keyframes grow-in {
        from {
            transform: scale(0);
        }

        to {
            transform: scale(1);
        }
    }

    @keyframes grow-out {
        from {
            transform: scale(1);
        }
        
        to {
            transform: scale(0);
        }
    }

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
    font-family: 'pragmatica';
    color: var(--black);
    line-height: 1.4;
}

body {
    font-size: 1rem;

    @media (min-width: 800px){
        font-size: 1.5rem;
    }
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
    max-width: 1500px;
}

.relative {
    position: relative;
}
</style>