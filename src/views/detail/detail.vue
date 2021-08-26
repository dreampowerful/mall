<template>
  <div class="wrapper" id="detailBar">
    <detailBar class="detailBar_nav" @goParms="goParmsf" id="parns"></detailBar>
    <betterScroll class="content" ref="backTopp">
      <detailTopImage :detail-top-image="topImages"></detailTopImage>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="Shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @imgLoads="imgLoadfs"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="GoodsParam"></DetailParamInfo>
      <DetailCommentInfo :commentinfo="comments"></DetailCommentInfo>
      <goodsList :produList="recommended" :recommend="recommended"></goodsList>
    </betterScroll>
  </div>
</template>

<script>
import detailBar from "@/views/detail/detailBar";
import {detailNetwork, goodInfo, Shop, GoodsParam, recommended} from "@/network/detail";
import detailTopImage from "@/views/detail/detailTopImage";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/DetailShopInfo";
import DetailParamInfo from "@/views/detail/DetailParamInfo";
import DetailGoodsInfo from "@/views/detail/DetailGoodsInfo";
import DetailCommentInfo from "@/views/detail/DetailCommentInfo";
import betterScroll from "@/components/content/BScroll/betterScroll";
import goodsList from "@/components/content/goods/goodList";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      Shop: {},
      detailInfo: {},
      GoodsParam: {},
      comments: {},
      recommended:[]
    }
  },
  components: {
    detailBar,
    detailTopImage,
    DetailBaseInfo,
    DetailShopInfo,
    betterScroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    goodsList
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
      // 5.获取参数的信息
      this.GoodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //  获取评论信息
      //判断是否有评论
      if (data.rate.cRate !== 0) {
        this.comments = data.rate.list[0]
      }
    }).catch()
    //  获取详情页面的推荐信息
    recommended().then(res => {
        // console.log(res)
        this.recommended = res.data.list
        console.log(this.recommended)
      }
    ).catch()
  },
  methods: {
    imgLoadfs() {
      this.$refs.backTopp.refresh()
    },
    goParmsf() {
      window.location.hash = '#parns'
    }
  },

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
