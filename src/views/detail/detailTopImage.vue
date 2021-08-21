<template>
  <!--  循环体-->
  <swiper :options="swiperOptions" class="swiper-container">
    <swiper-slide v-for="(item,indexKey) in detailTopImage" :key="indexKey">
      <img :src="item" alt="">
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "detailTopImage",
  props: {
    detailTopImage: {
      type: Array,
      default: null
    }
  },
  created() {
    // console.log(this.detailTopImage)
  },
  data() {
    return {
      //循环参数
      swiperOptions: {
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.swiper-container img{
   width: 100%;
}
</style>
