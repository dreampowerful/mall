<template>
  <div class="goods">
    <goodItem v-if="goods.show" :goodItemList="goods"  v-for="(goods,goodKey) in produList" :key="goodKey"></goodItem>
    <goodRecommend v-if="goods.image" :goodRecommend="goods" v-for="(goods,recommendKey) in produList" :key="recommendKey"></goodRecommend>
    <div class="line"></div>
  </div>
</template>

<script>
import goodItem from "@/components/content/goods/goodItem";
import goodRecommend from "@/components/content/goods/goodRecommend";

export default {
  name: "goodList",
  components: {
    goodItem,
    goodRecommend
  },
  props: {
    produList: {
      type: Array,
      default() {
        return []
      }
    }
  },

}
</script>

<style scoped>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.line {
  width: 100%;
  height: 49px;
}
</style>
