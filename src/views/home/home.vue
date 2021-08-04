<template>
  <div>
    <navBar class="home-bar">
      <div slot="lt"></div>
      <div slot="ct"><strong>购物街</strong></div>
      <div slot="rt"></div>
    </navBar>
    <homeCarousel :banner="banner"></homeCarousel>
    <homeRecond :recommend="recommend"></homeRecond>
    <FeatureView></FeatureView>
    <tabControl :title="['流行','新款','精选']"></tabControl>
    <ul>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
      <li>ad</li>
    </ul>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/navBar";
import homeCarousel from '@/views/home/children/homeCarousel'
import homeRecond from '@/views/home/children/homeRecond'
import FeatureView from './children/FeatureView'
import tabControl from '@/components/content/tabControl/tabControl'
import {homenw} from '@/network/homenw';

export default {
  name: "home",
  components: {
    navBar,
    homeCarousel,
    homeRecond,
    FeatureView,
    tabControl
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
        console.log(res)
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
