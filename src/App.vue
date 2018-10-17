<template>
  <div id="app">
    <home> </home>
  </div>
</template>

<script>
import home from "./components/home";

import nowplaying from "./components/nowplaying";
import find from "./components/find";
import shopping from "./components/shopping";
import store from "./components/store";
import login from "./components/login";

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
    nowplaying
  }
}
</script>

<style>

</style>
