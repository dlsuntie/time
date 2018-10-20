<template>
  <div>
    <topbar></topbar>
    <router-view></router-view>
    
  </div>
</template>

<script>

import topbar from "./components/topbar.vue";
import store from "./components/store.vue";

export default {
  data(){
    return {
      name:"11111111"
      
    }
  },
  components:{
    topbar,
    store
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }

  html,body{
    height: 100%;
  }


  li{
    list-style: none;
  }
</style>
