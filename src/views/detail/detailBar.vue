<template>
  <div class="nav">
    <div class="back" @click="goback"><img src="@/assets/img/common/back.svg" alt=""></div>
    <div :class="{isActive:currentIndex == titKey}" id="navItem" @click="switClick(titKey)"
         v-for="(titName,titKey) in tittle"
         :key="titKey">{{ titName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBar",
  data() {
    return {
      tittle: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    switClick(titKey) {
      this.currentIndex = titKey
      if (this.currentIndex == 1) {
        this.$emit('goParms')
      }
    },
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  height: 40px;
  line-height: 40px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  text-align: center;
  background: #fff;
  box-shadow: 0 -2px 5px deeppink;
}

.nav .back {
  width: 8%;
  height: 100%;
  margin: 5px 0 0 0;
}

.nav .back img {
  width: 65%;
}

.nav #navItem {
  flex: 1;
}

.nav .isActive {
  color: deeppink;
}
</style>
