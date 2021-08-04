<template>
  <swiper :options="swiperOptions" class="swiper-container">
    <swiper-slide v-for="(item,indexKey) in banner" :key="indexKey">
      <a :href="item.link"><img :src="item.image" :alt="item.title"></a>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "homeCarousel",
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: 3000
      }
    }
  },
  props: {
    banner: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  overflow: hidden;
  margin-top:40px ;
}

.swiper-container img {
  width: 100%;
  vertical-align: middle
}
</style>
