<template>
    <section>
        <Movies :movies="topMovies" title="Trending Movies"/>
        <Movies :movies="awaitMovies" title="Await Movies"/>
        <AwaitPoster :film="randAwaitMovie"/>
    </section>
</template>
<script>
import Movies from '@/components/movies/Movies.vue';
import AwaitPoster from '../components/AwaitPoster.vue';
export default {
    components: {
        Movies, AwaitPoster
    },
    computed: {
        topMovies () {
            return this.$store.getters.getTopMovies
        },
        awaitMovies () {
            return this.$store.getters.getAwaitMovies
        },
        randAwaitMovie () {
            return this.$store.getters.getRandomAwaitMovie;
        }
    },
    created () {
       
        this.$store.dispatch('setMovies');
    }
}
</script>