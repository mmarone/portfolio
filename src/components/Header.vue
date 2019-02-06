<template>
    <header class="header">        
        <nav class="site-nav container">
            <div class="site-nav__logo">
                Portforio     
            </div>
            <ul class="site-nav__menu">
                <li class="site-nav__item">
                    <a class="site-nav__link" href="/upcase/practice">Home</a>
                </li>
                <li class="site-nav__item">
                    <a class="site-nav__link" href="/upcase/the-weekly-iteration">Experience</a>
                </li>
                <li class="site-nav__item">
                    <a class="site-nav__link" href="/upcase/decks">Skill</a>
                </li>
                <li class="site-nav__item">
                    <a class="site-nav__link" href="https://forum.upcase.com/">About Me</a>
                </li>
            </ul>
        </nav> 
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
    .header {
        font-size: 2rem;
        background-color: #00de72;
        padding: 1.5rem 3rem;
        font-weight: 700;
        color: #fff;
    }

    .site-nav {
        display: flex;
        justify-content: space-between;

        &__logo {
        }

        &__menu {
            display: flex;
            justify-content: space-between;
        }

        &__item {
            list-style: none;

            &:not(:last-child) {
                margin-right: 3rem;
            }
        }
        &__link {           
           color: currentColor;
           text-decoration: none;
        }
    }
</style>
