<template>
  <div class="scroll">
    <ul>
      <li @click="clickMy(titleKey)" :class="{isActive:titleKey==curryIndex}" v-for="(item,titleKey) in title"
          :key="titleKey">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
  return {
    curryIndex:0
  }
  },
  methods: {
    clickMy(titleKey) {
      this.curryIndex = titleKey
    }
  }
}
</script>

<style scoped>
.scroll {
  position: sticky;
  top: 40px;
  left: 0;
  z-index: 999;
  background: #dee1e6;
}

.scroll ul {
  width: 100%;
  height: 40px;
  line-height:40px ;
  display: flex;
  text-align: center;
}

.scroll ul li {
  flex: 1;

}

.scroll .isActive {
  color: deeppink;
}

.scroll .isActive span {
  padding-bottom: 3px;
  border-bottom: 3px solid deeppink;
}
</style>
