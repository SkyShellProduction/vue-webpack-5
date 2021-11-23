<template>
    <div>
        <Header :class="[$route.path !== '/' ? 'other' : '']">
            <HeaderContent v-if="$route.path == '/'" />
        </Header>
        <main class="main">
            <Loader v-if="getLoader && $route.name != '404'" />
                <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import Loader from "@/components/Loader.vue";
export default {
    components: {
        Header,
        Loader,
        Footer,
        HeaderContent,
    },
    computed: {
        getLoader() {
            return this.$store.getters.getLoader;
        },
    },
};
</script>
<style lang="scss">
.router-link-exact-active {
    color: #00f7ff;
}
</style>
