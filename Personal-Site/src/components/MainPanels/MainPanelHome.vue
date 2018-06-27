<template>
    <div class="home__about">
        <div class="home__greeting">
            <h1 class="centered">Hi, I'm Andy.</h1>
            <ul class="list--description centered">
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
            <p class="centered"><router-link to="/about" class="button">More About Me</router-link></p>
        </div>
        <div class="home__portrait">
            <img src="/src/assets/portrait-fade.png" alt="portrait of Andy" class="portrait__img">
        </div>
    </div>
</template>

<style lang="sass">
    $black: #282828;
    $main-cool: #151e30;
    $main-warm: #ff9600;
    $alt-cool: #2a7f70;

    .home__about {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        align-items: center;
        max-width: 1050px;
        margin: 0 auto;
    }

    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 3rem;
    }

    .list--description {
        list-style: none;
        padding: 0;
        margin-top: -10px;
        margin-left: -10px;
        text-align: center;
        
        margin: 0 auto 2rem;
        font-size: 1.5rem;
    }

    .list--description__item {
        position: relative;
        line-height: 0.9;
        margin-top: 10px;
        margin-left: 10px;
        display: inline-block;
        padding: 0 0 0 8px;

        &:before {
            content: '';
            width: 3px;
            height: 100%;
            background: var(--main-warm);
            display: block;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    .button {
        background: rgb(26,55,65);
        background: linear-gradient(135deg, rgba(26,55,65,1) 0%, rgba(36,99,93,1) 100%);
        box-shadow: 6px 6px 0 0 rgba($main-cool, 0.5);
        padding: 25px 50px;
        display: inline-block;
        line-height: 0.9;
        border: 1px solid $main-cool;
    }

    .centered {
        text-align: center;
    }
</style>
