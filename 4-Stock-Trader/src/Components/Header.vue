<template>
    <nav class="nav">
        <ul class="nav__list nav__list--main">
            <li class="nav__item logo"><router-link to="/">Stock Trader</router-link></li>
            <li class="nav__item"><router-link to="/portfolio">Portfolio</router-link></li>
            <li class="nav__item"><router-link to="/stocks">Stocks</router-link></li>
        </ul>
        <ul class="nav__list nav__list--secondary">
            <li class="nav__item cursor">End Day</li>
            <li class="nav__item cursor" @click="showSaveLoadMenu">Save &amp; Load <small>▼</small>
                <ul class="nav__sublist" v-show="this.showSubMenu">
                    <li class="nav__subitem cursor">Save Data</li>
                    <li class="nav__subitem cursor">Load Data</li>
                </ul>
            </li>
            <li class="nav__item"><strong>Funds: ${{ fundsAvailable }} </strong></li>
        </ul>
    </nav>    
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                showSubMenu: false/*,
                fundsAvailable: this.$store.state.funds*/
            }
        },
        computed: mapGetters([
            'fundsAvailable'
        ])/*{
            formatFunds(){
                return this.fundsAvailable.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            }
        }*/,
        methods: {
            showSaveLoadMenu() {
                this.showSubMenu = !this.showSubMenu;
            }
        }
    }
</script>

<style>
    .logo {
        font-size: 1.5rem;
    }
    .nav {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-content: end;
    }

        .nav__list, .nav__sublist {
            list-style: none;
            padding-left: 0;
        }

        .nav__sublist {
            position: absolute;
            top: 100%;
            right: 0;
            background: #ffffff;
            padding: 10px;
            box-shadow: 0 2px 3px 1px rgba(80, 80, 80, 0.25);
        }

        .nav__list--main, .nav__list--secondary {
            display: flex;
        }

        .nav__list--secondary {
            justify-content: flex-end;
            align-content: flex-end;
        }

        .nav__item {
            margin-right: 20px;
            position: relative;
        }

        .nav__item:last-child {
            margin-right: 0;
        }

        .cursor {
            cursor: pointer;
        }
        
</style>
