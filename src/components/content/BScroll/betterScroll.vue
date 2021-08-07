<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "betterScroll",
  data() {
    return {
      //给new BScroll一个指引，当mounted函数摧毁时，new BScroll不会被回收
      scroll: {}
    }
  },
  mounted() {
    //$nextTick确保一定获得DOM元素
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        scrollX:true,
        probeType:3
      })
    })
  }
}
</script>

<style scoped>

</style>
