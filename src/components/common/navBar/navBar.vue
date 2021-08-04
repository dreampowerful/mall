<template>
  <div class="nav">
    <div class="lt">
      <slot name="lt"></slot>
    </div>
    <div class="ct">
      <slot name="ct"></slot>
    </div>
    <div class="rt">
      <slot name="rt"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  height: 40px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}

.nav .lt {
  width: 60px;
}

.nav .ct {
  flex: 1;
  line-height:40px;
  text-align: center;
  color: #fff;
}

.nav .rt {
  width: 60px;
}
</style>
