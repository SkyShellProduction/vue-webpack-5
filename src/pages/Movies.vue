<template>
    <div class="container">
        <form action="" class="form__main" @submit.prevent="onSubmit">
                <input type="text" placeholder="search something?" class="header__input" v-model="keyword" required>
                <button class="icon-reg"></button>
        </form>
        <p v-if="moviesList.length == 0" class="undefined">Кажется ничего не найдено</p>
        <div class="main__block" v-if="moviesList.length > 0">
            <div class="some__item" v-for="(item, i) in moviesList" :key="i" @click="go(item.filmId)">
                <div class="some__img">
                     <img :src="item.posterUrlPreview" :alt="[item.nameRu, item.nameEn]" loading="lazy">
                     <span class="some__rating">{{item.rating != 'null' ? item.rating : '??+'}}</span>
                </div>
                <h3 class="some__title">{{item.nameRu !== '' ? item.nameRu : item.nameEn}}</h3>
            </div>
        </div>
        <div class="pagination">
            <ul class="header__list">
                <li v-for="i in pagesCount" :key="i">
                    <a href="#" 
                    :class="['pagination__link', i == currentPage ? 'active' : '']"
                    @click.prevent="changeMovies(i)"
                    >{{i}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('setMoviesList', {method: 'top', keyword: '', page: 1})
    },
    computed: {
        moviesList () {
            return this.$store.getters.getMoviesList
        },
        pagesCount () {
            return this.$store.getters.getPagesCount
        },
        currentPage () {
            return this.$store.getters.getCurrentPage
        },

    },
    data () {
        return {
            page: 1,
            method: 'top',
            keyword: '',
        }
    },
    methods: {
        go(id){
            this.$router.push(`/movies/${id}`)
        },
        changeMovies(page){
            this.page = page;
            this.$store.dispatch('setMoviesList', {method: this.method, keyword: this.keyword, page})
        },
        onSubmit () {
            this.method = 'search';
            this.$store.dispatch('setMoviesList', {method: this.method, keyword: this.keyword, page: 1})
        }
    }
}
</script>