<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img src="@/assets/img/Snipaste_2021-08-03_16-00-54.jpg" height="240" width="558"/></swiper-slide>
    <swiper-slide><img src="@/assets/img/Snipaste_2021-08-03_16-02-02.jpg" height="286" width="379"/></swiper-slide>
  </swiper>
</template>

<script>

export default {
  name: "homeCarousel",
  components: {},
  data() {
    return {
      swiperOptions: {
        loop:true,
        autoplay: 3000
      }
    }
  },

}
</script>

<style scoped>
.swiper-container {
  width: 100%;
}
</style>
