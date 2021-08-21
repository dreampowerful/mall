<template>
  <div id="app" class="wrapper">
    <MainTabBar></MainTabBar>
    <!--    keep-alive包裹的路由组件会缓存路由组件，而不是先建立路由组件，切换的时候在销毁路由组件-->
    <keep-alive exclude="detail">
      <!--      路由组件显示在这里-->
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
