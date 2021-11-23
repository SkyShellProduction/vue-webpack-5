<template>
    <div class="trend__movies">
        <div class="container">
            <h2 class="trend__tv-title popular__title">{{title}} <span class="icon-reg"></span></h2>
                <!-- <Swiper
                    :slides-per-view="3"
                    :space-between="30"
                >
                    <SwiperSlide v-for="film in movies" :key="film.id">
                        <router-link class="movie__item">
                            <img src="" alt="">
                        </router-link>
                    </SwiperSlide>
                </Swiper> -->
            <carousel 
                :perPageCustom="[[200, 1], [430, 2],[576,3],[768, 4], [1024, 5], [1200, 6]]"
                :paginationEnabled="false"
                >
                <slide v-for="film in movies" :key="film.id" class="slide__item">
                    <router-link class="movie__item" :to="/movies/+film.filmId">
                        <img :src="film.posterUrlPreview" :alt="film.nameRu">
                    </router-link>
                </slide>
            </carousel>
            </div>
        </div>
</template>
<script>
export default {
    props: {
        movies: {
            type: Array
        },
        title: {
            type: String,
            default: 'Trending Movies'
        }
    },
}
</script>
<style lang="scss">
    .slide__item{
        margin: 0 15px;
        border-radius: 20px;
        overflow: hidden;
        color: #0084ff;
    }
</style>