<template>
    <div class="home__about">
        <div class="home__greeting">
            <h1>Hi, I'm Andy</h1>
            <ul class="list--description">
                <li class="list--description__item">Developer</li>
                <li class="list--description__item">Designer</li>
                <li class="list--description__item">Problem Solver</li>
                <li class="list--description__item">Coffee Drinker</li>
                <li class="list--description__item">Nature Lover</li>
                <li class="list--description__item">Cyclist</li>
                <li class="list--description__item">Husband</li>
                <li class="list--description__item">Father</li>
                <li class="list--description__item">Pet Owner</li>
            </ul>
            <router-link to="/about" class="button">More About Me</router-link>
        </div>
        <div class="home__portrait">
            <img src="/src/assets/portrait-fade.png" alt="portrait of Andy" class="portrait__img">
        </div>
    </div>    
</template>

<style lang="sass">
    .home__about {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .list--description {
        list-style: none;
        padding: 0;
    }
</style>
