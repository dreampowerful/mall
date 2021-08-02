<template>
  <navBar class="home-bar">
    <div slot="lt"></div>
    <div slot="ct"><strong>购物街</strong></div>
    <div slot="rt"></div>
  </navBar>
</template>

<script>
import navBar from "@/components/common/navBar/navBar";
export default {
  name: "home",
  components:{
    navBar
  }
}
</script>

<style scoped>
.home-bar{
  background:#ff8198;
}
</style>
