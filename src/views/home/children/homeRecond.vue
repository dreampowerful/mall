<template>
  <div class="hr">
    <ul>
      <li v-for="(items,indexkeyh) in recommend" :key="indexkeyh">
        <a :href="items.link"><img :src="items.image" :alt="items.title">{{ items.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "homeRecond",
  props: {
    recommend: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.hr {
  width: 100%;
  overflow: hidden;
}

ul {
  width: 100%;
  display: flex;
  overflow: hidden;
  padding: 0;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
}

ul li {
  flex: 1;
}

ul li img {
  width: 75%;
  display: block;
  margin: 0 auto;
}
</style>
