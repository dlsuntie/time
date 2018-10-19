<template>
  <div id="app">
     <navbar></navbar>
     <home ></home>
    <!--  <nowplaying></nowplaying> -->
   <!-- <detail ></detail> -->

  </div>
</template>

<script>
import home from "./components/home";
import navbar from "./components/navbar";
import nowplaying from "./components/nowplaying";
import detail from "./components/detail";
import find from "./components/find";
import shopping from "./components/shopping";
import store from "./components/store";
import login from "./components/login";
import { Swipe, SwipeItem } from 'mint-ui';

export default {
  data(){
    return{
      isShow:true
    }
  },
  methods:{

  },
  computed:{

  },
  components:{
    home,
    find,
    shopping,
    store,
    login,
    nowplaying,
    navbar,
    detail
   
  }
} 
</script>

<style type="text/css" scoped lang="scss">

</style>
