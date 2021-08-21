<template>
  <div class="wrapper">
    <navBar class="home-bar">
      <div slot="lt"></div>
      <div slot="ct"><strong>购物街</strong></div>
      <div slot="rt"></div>
    </navBar>
    <betterScroll ref="backTopp"
                  class="content"
                  :probeType="3"
                  @scrollson="scrollfath"
                  :pull-up-load="true"
                  @pullingUp="loadMore">
      <homeCarousel :banner="banner"></homeCarousel>
      <homeRecond :recommend="recommend"></homeRecond>
      <FeatureView></FeatureView>
      <tabControl :title="['流行','新款','精选']" @tabClick="goodSwitch"></tabControl>
      <goodList :produList="goods[tabClickString].list"></goodList>
    </betterScroll>
    <backTop @click.native="goTop()" ref="goTop" v-show="isshow"></backTop>
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
import backTop from "@/components/content/backTop/backTop";

export default {
  name: "home",
  components: {
    navBar,
    homeCarousel,
    homeRecond,
    FeatureView,
    tabControl,
    goodList,
    betterScroll,
    backTop
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
      tabClickString: 'pop',
      isshow: false
    }
  },
  created() {
    this.homenw()
    this.gethomeGds('pop')
    this.gethomeGds('new')
    this.gethomeGds('sell')
  },
  mounted() {
    //在home中以$on监听imgLoads事件，imgLoads不用挂载到home中，一个新的写法
    const refresh = this.debounce(this.$refs.backTopp.refresh)
    this.$bus.$on('imgLoads', () => {
      refresh()
    })
  },
  methods: {
    homenw() {
      homenw().then(
        res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        }
      )
    },
    gethomeGds(type) {
      let page = this.goods[type].page + 1
      gethomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.backTopp.finishPullUp()
        }
      )
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
    },
    goTop() {
      this.$refs.backTopp.backTop(0, 100, 500)
    },
    scrollfath(position) {
      if (-position.y > 500) {
        this.isshow = true
      } else {
        this.isshow = false
      }
    },
    loadMore() {
      this.gethomeGds(this.tabClickString)
    },
    debounce(func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, 200)
      }
    },
  },
  //activated deactivated记录活跃页面的滚动条位置，没做
  activated() {

  },
  deactivated() {

  }

}
</script>
<style scoped>
.home-bar {
  background: #ff8198;
}

.wrapper {
  width: 100%;
  height: 93vh;
  overflow: hidden;
  position: relative;
}

.wrapper .content {
  overflow: hidden;

  position: absolute;
  top: 40px;
  left: 0;
}
</style>
