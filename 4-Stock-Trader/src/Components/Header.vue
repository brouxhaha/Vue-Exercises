<template>
    <nav class="nav">
        <ul class="nav__list nav__list--main">
            <li class="nav__item logo"><router-link to="/">Stock Trader</router-link></li>
            <li class="nav__item"><router-link to="/portfolio">Portfolio</router-link></li>
            <li class="nav__item"><router-link to="/stocks">Stocks</router-link></li>
        </ul>
        <ul class="nav__list nav__list--secondary">
            <li class="nav__item" @click="endDay">End Day</li>
            <li class="nav__item" @click="showSaveLoadMenu">Save &amp; Load <small>▼</small>
                <ul class="nav__sublist">
                    <li class="nav__subitem">Save Data</li>
                    <li class="nav__subitem">Load Data</li>
                </ul>
            </li>
            <li class="nav__item"><strong>Funds: </strong></li>
        </ul>
    </nav>    
</template>

<script>
    export default {

    }
</script>