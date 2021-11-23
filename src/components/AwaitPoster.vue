<template>
    <div class="coming__soon" v-if="film">
        <div class="container">
            <div class="coming__soon-block">
                <img :src="film.posterUrl" alt="">
                <div class="coming__block-neon">
                    <div class="coming__soon-img">
                        <img :src="film.posterUrlPreview" alt="">
                    </div>
                    <span class="coming__soon-span">comming soon...</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   computed: {
       film () {
           return this.$store.getters.getRandomAwaitMovie
       }
   },
}
</script>