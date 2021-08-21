<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "betterScroll",
  data() {
    return {
      //给new BScroll一个指引，当mounted函数摧毁时，new BScroll不会被回收
      scroll: {},
      position: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //$nextTick确保一定获得DOM元素
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      scrollY: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    if (this.probeType === 2 || this.probeType === 3) {
      //on是better-scroll的一个监听器；position代表scroll的坐标，官方文档说明第二个蚕食是回调函数，并且能获取scroll的坐标
      this.scroll.on('scroll', (position) => {
        this.$emit('scrollson', position)
      })
    }

    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
  ,
  methods: {
    backTop(x, y, times = 500) {
      this.scroll && this.scroll.scrollTo(x, y, times)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
  }
}
</script>

<style scoped>

</style>
