<template>
  <div id="interest">
    <div class="title-top">
        <p>——————&nbsp;&diams;&nbsp你可能感兴趣的&nbsp;——————</p>
    </div>
    <ul class="img_list">
      <li v-for="data in goodlist">
        <b class="z_top">新品</b>
        <img :src="data.image" alt="">
        <p class="text_1">自营</p>
        <p class="text_2">{{data.name}}</p>
        <span class="fixed2">￥ {{(data.minSalePrice)/100}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data(){
      return{
        
        goodlist:[],
        
        
      }
    },
    mounted() {
      var num = parseInt(6*Math.random()+1);
      console.log(num);
      axios.get(`/Service/callback.mi/ECommerce/RecommendProducts.api?t=201810191343648462&goodsIds=101829,107353,106089&pageIndex=${num}`).then(res=>{
        
        this.goodlist = res.data.goodsList;
        
        console.log(this.goodlist);
      }).catch(error=>{
        console.log(error);
      })
    }
    
  }
</script>

<style scoped lang="scss">
  #interest{
    margin-top:0.2rem;
    width:100%;
    .title-top{
      width:100%;
      p{
        width:100%;
        height:0.25rel;
        line-height: 0.25rem;
        text-align: center;
        color:#bbb;
        font-size: 0.15rem;
      }
    }
    .img_list{
      width:100%;
      display: flex;
      flex-wrap:wrap;
      justify-content:space-between;
      li{
        width:49%;
        background-color:white;
        margin-top:0.06rem;
        position: relative;
        .z_top{
          background-color:#25ACBD;
          font-size:0.13rem;
          color:white;
          position: absolute;
          top:0.02rem;
          left:0;

        }
        img{
          width:100%;

        }
        .text_1{
          width:0.28rem;
          height:0.13rem;
          margin-left:0.1rem;
          line-height: 0.15rem;
          text-align: center;
          display: inline-block;
          border: 0.01rem solid #ff8600;
          border-radius: 0.03rem;
          font-size:0.1rem;
          color:#ff8600;
          // position: relative;
          // top:-0.07rem;
        }
        .text_2{
          width:1.3rem;
          font-size:0.15rem;
          display: inline-block;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        span{
          font-size:0.15rem;
          color:#ff8600;
          display:block;
          margin-left:0.05rem;
        }
      }
    }
  }
</style>

