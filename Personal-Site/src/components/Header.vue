<template>
    <header class="page-header content">
        <img src="../assets/triangle.svg" class="header__svg">
        <div class="logo">
            <svg id="logo__svg" class="logo__svg" data-name="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><defs></defs><title>logo</title><path class="logo__shadow" d="M31.05,3.88V5.71A20.62,20.62,0,0,1,42.62,24.25V22.42A20.62,20.62,0,0,0,31.05,3.88Z"></path><path class="logo__shadow" d="M12.94,23.39a8.26,8.26,0,0,0,0,.86,9.05,9.05,0,0,0,18.1,0V22.42a9.08,9.08,0,0,1-18.11,1Z"></path><path class="logo__shadow" d="M22,3.62A20.45,20.45,0,0,1,26,4V2.19A20.6,20.6,0,0,0,1.38,22.42c0,.3,0,.61,0,.91A20.63,20.63,0,0,1,22,3.62Z"></path><path class="logo__shape" d="M31.05,4.88v16.7h0v1.83a9.05,9.05,0,1,1-18.1,0V21.58A9.05,9.05,0,0,1,26,13.48V3.19A20.6,20.6,0,0,0,1.41,22.34a20.6,20.6,0,0,0,34,15v4.92h7.26V23.41A20.62,20.62,0,0,0,31.05,4.88Z"></path></svg>
            <div class="logo__text">Andrew DeBroux</div>
            <div class="logo__tagline">Developer <small class="white">&&</small> Designer</div>
        </div>
    </header>
</template>

<style lang="sass">
    $black: #282828;
    $main-cool: #151e30;
    $main-warm: #ff9600;
    $alt-cool: #2a7f70;

    body {
        --main-cool: #151e30;
        --main-warm: #FF9600;
        --alt-cool: #3EBBA7;
    }

    .page-header:before {
        content: '';
        display: block;
        height: 40px;
        background: var(--main-cool);
        position: relative;
        width: 100%;
        z-index: 1;
        box-shadow: 0 4px 4px 0 rgba(40,40,40, 0.5);
        margin-bottom: 15px;
    }

    .logo {
        position: relative;
        text-align: center;
        font-size: 2rem;
        font-size: 1.5rem;
    }

    .logo__svg {
        width: 60px;
    }
    
    .logo__shadow{
        fill: var(--main-cool);
    }
    
    .logo__shape{
        fill: var(--main-warm);
    }

    .logo__tagline {
        font-size: 1.25rem;
        text-transform: uppercase;
        color: var(--main-warm);
        text-shadow: 0 3px 2px rgba($main-cool, 0.75);
    }

    .header__svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .white {
        color: white;
    }
</style>

