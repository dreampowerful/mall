<template>
  <div>
    <navBar class="home-bar">
      <div slot="lt"></div>
      <div slot="ct"><strong>购物街</strong></div>
      <div slot="rt"></div>
    </navBar>
    <homeCarousel></homeCarousel>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/navBar";
import {homenw} from '@/network/homenw';
import homeCarousel from '@/views/home/swiper/homeCarousel'

export default {
  name: "home",
  components: {
    navBar,
    homeCarousel
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    homenw().then(
      res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      }
    ).catch()
  }
}
</script>
<style scoped>
.home-bar {
  background: #ff8198;
}
</style>
