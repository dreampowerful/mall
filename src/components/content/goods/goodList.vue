<template>
  <div class="goods">
    <goodItem :goodItemList="goods" v-for="(goods,goodKey) in produList" :key="goodKey"></goodItem>
    <div class="line"></div>
  </div>
</template>

<script>
import goodItem from "@/components/content/goods/goodItem";

export default {
  name: "goodList",
  components: {
    goodItem
  },
  props: {
    produList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.line{
  width: 100%;
  height: 49px;
}
</style>
