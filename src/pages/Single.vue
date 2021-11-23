<template>
    <div class="container">
        <p v-if="getError" class="error">{{getError}}</p>
           <div class="main__solo" v-if="solo">
         <div class="solo__img">
                <img :src="solo.posterUrlPreview" alt="">
                <a :href="solo.webUrl" class="solo__link header__watch" target="_blank">Смотреть фильм</a>
            </div>
            <div class="solo__content">
                <h3 class="solo__title trend__tv-title">{{solo.nameRu !== '' ? solo.nameRu : solo.nameEn}}</h3>
                <ul class="solo__items">
                    <li class="solo__countries">
                        <span>Страны:</span> {{solo.countries.reduce((acc, item) => acc + `${item.country} `, '')}}
                    </li>
                    <li class="solo__genres">
                        <span>Жанры:</span> {{solo.genres.reduce((acc, item) => acc + `${item.genre} `, '')}}
                    </li>
                    <li class="solo__dur">
                        <span>Продолжителность</span>: {{solo.filmLength}}
                    </li>
                    <li class="solo__year">
                        <span>Год:</span> {{solo.year}}
                    </li>
                    <li class="solo__premiere">
                        <span>Мировая премьера:</span> {{solo.premiereWorld}}
                    </li>
                    <li class="solo__rating">
                        <span>Возрастной рейтинг:</span> {{solo.ratingAgeLimits}}+
                    </li>
                    <li class="solo__slogan">
                        <span>Слоган:</span> {{solo.slogan}}
                    </li>
                    <li class="header__descr solo__descr">
                        <span>Описание:</span> {{solo.description}}
                    </li>
                </ul>
            </div>
            <ul class="solo__facts">
                <h3 class="trend__tv-title">Интересные факты</h3>
                <li class="solo__facts-item" v-for="(item, i) in solo.facts.slice(0, 10)" :key="i">
                    {{i+1}}: <span v-html="item"></span>
                </li>
            </ul>
            <h3 class="solo__title2 trend__tv-title">Фото</h3>
            <div class="solo__images">
                <img v-for="(item, i) in solo.frames.slice(0, 12)" :key="i"   
                     :src="item.preview" alt="" loading="lazy">
            </div>
            <div class="solo__reviews">
                <h3 class="solo__title2 trend__tv-title">Отзывы</h3>
                 <div class="review__item" v-for="(item, i) in solo.reviews.slice(0, 10)" :key="i">
                    <span>{{item.reviewAutor}}</span>
                    <p class="review__descr">{{item.reviewDescription}}</p>
                 </div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    created () {
        this.$store.dispatch('soloFilm', this.$route.params.id)
    },
    computed: {
        solo () {
            return this.$store.getters.getSoloFilm
        },
         getError () {
            return this.$store.getters.getError;
        }
    }
}
</script>
