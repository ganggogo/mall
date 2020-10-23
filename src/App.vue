<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "./components/contents/MainTabBar.vue"
  export default {
    name: 'App',
    
    components:{
      MainTabBar
    }
  }
</script>
<!--style里面要加分号嗷-->
<style>
  @import "./assets/css/base.css";
  
</style>
