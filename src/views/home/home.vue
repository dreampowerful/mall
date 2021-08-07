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
    <tabControl :title="['流行','新款','精选']" @tabClick="goodSwitch"></tabControl>
    <betterScroll>
      <goodList :produList="goods[tabClickString].list"></goodList>
    </betterScroll>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/navBar";
import homeCarousel from '@/views/home/children/homeCarousel'
import homeRecond from '@/views/home/children/homeRecond'
import FeatureView from './children/FeatureView'
import tabControl from '@/components/content/tabControl/tabControl'
import {homenw, gethomeGoods} from '@/network/homenw';
import goodList from '@/components/content/goods/goodList'
import betterScroll from "@/components/content/BScroll/betterScroll";

export default {
  name: "home",
  components: {
    navBar,
    homeCarousel,
    homeRecond,
    FeatureView,
    tabControl,
    goodList,
    betterScroll
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      tabClickString: 'pop'
    }
  },
  created() {
    this.homenw()
    this.gethomeGds('pop')
    this.gethomeGds('new')
    this.gethomeGds('sell')
  },
  methods: {
    homenw() {
      homenw().then(
        res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        }
      ).catch()
    },
    gethomeGds(type) {
      let page = this.page + 1
      gethomeGoods(type, page).then(
        res => {
          this.goods[type].list.push(...res.data.list)
        }
      ).catch(
        error => {
          alert('活动繁忙')
        })
    },
    goodSwitch(titleKey) {
      switch (titleKey) {
        case 0:
          this.tabClickString = 'pop'
          break
        case 1:
          this.tabClickString = 'new'
          break
        case 2:
          this.tabClickString = 'sell'
          break
      }
    }
  }

}
</script>
<style scoped>
.home-bar {
  background: #ff8198;
}
.wrapper{
width: 100%;
  height:80vh;
  overflow: hidden;
}
</style>
