<template>
  <div class="wrapper" id="detailBar">
    <detailBar class="detailBar_nav"></detailBar>
    <betterScroll class="content" ref="backTopp">
      <detailTopImage :detail-top-image="topImages"></detailTopImage>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="Shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @imgLoads="imgLoadfs"></DetailGoodsInfo>
    </betterScroll>
  </div>
</template>

<script>
import detailBar from "@/views/detail/detailBar";
import {detailNetwork, goodInfo, Shop} from "@/network/detail";
import detailTopImage from "@/views/detail/detailTopImage";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/DetailGoodsInfo";
import betterScroll from "@/components/content/BScroll/betterScroll";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      Shop: {},
      detailInfo: {}
    }
  },
  components: {
    detailBar,
    detailTopImage,
    DetailBaseInfo,
    DetailShopInfo,
    betterScroll,
    DetailGoodsInfo
  },
  //获取商品数据
  created() {
    this.iid = this.$route.params.iid
    detailNetwork(this.iid).then(res => {
      console.log(res)
      const data = res.result
      //获取详情页的轮播图
      this.topImages = data.itemInfo.topImages
      //获取详情页的商品介绍
      this.goods = new goodInfo(data.itemInfo, data.columns, data.shopInfo.services)
      this.Shop = new Shop(data.shopInfo)
      //
      this.detailInfo = data.detailInfo
    }).catch()
  },
  methods: {
    imgLoadfs() {
      this.$refs.backTopp.refresh()
    }
  }
}
</script>

<style scoped>
#detailBar {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #fff;
  z-index: 9999;
}

#detailBar .detailBar_nav {
  position: relative;
  background: #fff;
  z-index: 99999;
}

.content {
  width: 100vw;
  height: calc(100% - 40px);
}
</style>
