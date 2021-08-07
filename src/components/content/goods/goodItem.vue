<template>
  <div class="goods_items">
    <div class="phtos"><img :src="goodItemList.show.img" alt=""></div>
    <div class="goods_mesPri">
      <p class="title">{{ goodItemList.title }}</p>
      <span class="price">{{ '￥' + goodItemList.price }}</span>
      <span class="message">{{ goodItemList.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodItem",
  props: {
    goodItemList: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.goods_items {
  width: 45%;
  height: 300px;
  font-size: 13px;
  text-align: center;
}

.goods_items .goods_mesPri {
  width: 95%;
  margin: 0 auto;

}

.goods_items .goods_mesPri p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 0 5px 0;
  padding: 0;
}

.goods_items .goods_mesPri .price {
  color: deeppink;
}

.goods_items .goods_mesPri .message:before {
  /*收藏图片没完成*/
  background: url("~@/assets/img/common/collect.svg");
}

.goods_items .phtos {
  width: 100%;
}

.goods_items .phtos img {
  width: 100%;
  height: 253px;
  border-radius: 5px;
  vertical-align: middle;
}
</style>
