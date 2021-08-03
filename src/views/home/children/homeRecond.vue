<template>
  <div>
    <ul>
      <li v-for="(items,indexkeyh) in recommend" :key="indexkeyh">
        <a :href="items.link"><img :src="items.image" :alt="items.title">{{items.title}}</a>
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
ul {
  width: 100%;
  display: flex;
  overflow: hidden;
}
ul li {
  flex:1;
}
ul li img{
  width: 70px;
  display: block;

}
</style>
