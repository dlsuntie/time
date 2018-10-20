<template>
  <div id="model">
    <div class="m-title">
      <h3>数码配件</h3>
      <ul>
        <li>
          <a href="#">更多</a>
          <img src="../../../static/storeimg/1018201.png" alt="right">
        </li>
      </ul>
    </div>

    <div class="w_model">
      <a href="#">
        <img :src="wmodel" alt="hot"/>
      </a>
      <ul class="mlist">
        <li class="m_img">
          <img :src="newdata.image" v-for="newdata in onelist"/>
          
        </li>
        <li class="m_text">
          <p>攻壳机动队 1:6少佐草薙素子</p>
          <p> Qmx 哈利波特Q版人偶</p>
          <p>多美卡合金车-闪电皮卡丘</p>
        </li>
        <li class="m_price">
          <span>￥ 79</span>
          <span>￥ 188</span>
          <span>￥ 29</span>
        </li>
        
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data(){
    return{
      wmodel:"",
      onelist:[],
      
      
    }
  },
  mounted() {
    axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api").then(res=>{
      this.wmodel = res.data.category[0].image;
      this.onelist = res.data.category[0].subList;
      console.log(this.onelist);
    }).catch(error=>{
      console.log(error);
    })
  }
  
}
</script>

<style scoped lang="scss">
  #model{
    width:100%;
    margin-top:0.2rem;
    overflow: hidden;
    background-color:white;
    .m-title{
      width:100%;
      height:0.23rem;
      padding:0.1rem 0 0.1rem 0;
      h3{
        width:0.8rem;
        text-align: right;
        border-left:0.07rem solid #FFB90F;
        color:#FFB90F;
        font-size:0.17rem;
        font-weight: 400;
        float: left;
      }
      ul{
        width:1rem;
        float:right;
        li{
          height:0.17rem;
          a{
            color:#333;
            font-size:0.17rem;
            line-height: 0.17rem;
            text-decoration: none;
            display: block;
            float: left;
          }
          img{
            width:0.12rem;
            height:0.2rem;
            padding-right:0.3rem;
            float: right;
            
          }
        }
      }
    }
    .w_model{
      display: flex;
      flex-direction: column;
      align-items: center;
      a{
        width:3.6rem;
        height:1.7rem;
        text-decoration: none;
        display: block;
        border-bottom:0.01rem solid #ccc;
        img{
          width:3.6rem;
          height:1.6rem;
        }
      }
      .mlist{
        width:3.6rem;
        height:2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        li{
          width:100%;
          display: flex;
          justify-content:space-around;
          align-items: center;
          
          img{
            width:1.2rem;
            height:1.2rem;
          }
          
        }
        .m_img{
          height:1.2rem;
        }
        .m_text{
          p{
          width:1.2rem;
          height:0.16rem;
          font-size:0.12rem;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          }
          
        }
        .m_price{
          color:#f15353;
          height:0.15rem;
          margin-top:0.05rem;
          font-size:0.17rem;
        }
      }
    }
  }
</style>

