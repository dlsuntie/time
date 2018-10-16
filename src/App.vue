<template>
  <div>
    <h3>我是根组件</h3>
    <router-view></router-view>
  </div>
</template>

<script>
import home from"./components/home";
import find from"./components/find";
import shopping from"./components/shopping";
import store from"./components/store";
import login from"./components/login";

export default {
  data(){

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
    login
  }
}
</script>

<style>

</style>
