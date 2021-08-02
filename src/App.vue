<template>
  <div id="app">
    <mainTabbat></mainTabbat>
    <router-view></router-view>
  </div>
</template>

<script>
import mainTabbat from '@/components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    mainTabbat
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
