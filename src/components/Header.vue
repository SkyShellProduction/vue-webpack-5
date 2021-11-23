<template>
<!-- style="background: url(../assets/img/headerBg.png) no-repeat center/cover" -->
    <header class="header" :style="{background: img}">
        <div class="navigate">
            <div class="container">
                <nav class="header__nav">
                   <Logo />
                    <div :class="['header__items', showMenu ? 'active' : '']">
                        <ul class="header__list">
                            <li v-for="(link, index) in links" :key="index">
                                <router-link :to="link.path" class="header__link">
                                    {{link.name}}
                                </router-link>
                            </li>
                        </ul>
                        <ul class="header__list header__list-nth2">
                            <li>
                                <router-link to="/movies" class="header__icon search__link">
                                    <span class="icon-reg"></span>
                                </router-link>
                            </li>
                            <li><a href="#" class="header__icon icon-reg"></a></li>
                            <li><a href="#" class="header__icon icon-reg"></a></li>
                        </ul>
                    </div>
                    <a href="#" :class="['header__btn', showMenu ? 'active' : '']" @click="$store.dispatch('changeMenu')">
                        <span class="bars"></span>
                    </a>
                </nav>
            </div>
        </div>
        <div :class="['header__abs', showMenu ? 'active' : '']" @click="$store.dispatch('changeMenu')"></div>
        <slot />
    </header>
</template>
<script>

import Logo from '@/components/Logo.vue';
import HeaderBg from '@/assets/img/headerBg.png';
export default {
    components: {
        Logo
    },
     data () {
        return {
            links: [
                {name: 'home', path: '/'},
                {name: 'movies', path: '/movies'},
            ],
            img: `url(${HeaderBg}) no-repeat center/cover`
        }
    },
    computed: {
        showMenu () {
            return this.$store.getters.showMenu;
        }
    }
}
</script>