<template>
  <div class="header__content" v-if="film">
    <div class="container">
      <div class="header__text">
        <h1 class="header__title">{{film.nameRu ? film.nameRu : film.nameEn}}</h1>
        <div class="header__balls">
          <span class="header__year">{{film.year}}</span>
          <div class="header__stars header__year">
            <span class="icon-solid"></span><strong>{{film.rating}}</strong>
          </div>
        </div>
        <p class="header__descr"></p>
        <div class="header__buttons">
          <router-link :to="/movies/+film.filmId" class="header__watch">
            <span class="icon-solid"></span> More Information </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    computed: {
        film () {
            return this.$store.getters.getRandomTopMovie
        }
    },
};
</script>