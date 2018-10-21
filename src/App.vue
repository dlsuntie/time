<template>
 <div id="app">
     <navbar></navbar>
     <home ></home>
<<<<<<< HEAD
    
=======
>>>>>>> a45dc15e0712392a20c2fd572a67d18ca30f1e59
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
    detail,

   
  }
} 
</script>


<style type="text/css" scoped lang="scss">
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
