<template>
  <nav>
    <div class="navtop" v-show="isShow">
      <p @click="isShow=!isShow">×</p>
      <dl>
        <dt>
          <div class="logo"></div>
        </dt>
        <dd class="topinfo">
          <span class="text-top">您已收到150元新人红包</span>
          <span class="text-btm">下载时光网App查看（仅限新用户）</span>
          
        </dd>
        <dd class="topapp">
          <span>打开APP</span>
        </dd>
      </dl>
    </div>
    <dl class="nav_bar">
      <dt>
        <div></div>
      </dt>
      <dd>
        <router-link tag="p" to="/home" activeClass="kevinactive">首页</router-link>
        <router-link tag="p" to="/shopping" activeClass="kevinactive">购票</router-link>
        <router-link tag="p" to="/store" activeClass="kevinactive">商城</router-link>
        <router-link tag="p" to="/find" activeClass="kevinactive">发现</router-link>
        <router-link tag="span" to="/login" activeClass="icon" class="iconfont">
          <i class="iconfont icon-account"></i>
        </router-link>
        
      </dd>
    </dl>
    
  </nav>
</template>

<script>
  export default{
    data(){
      return{
        isShow:true
      }
    }
  }
  

</script>

<style scoped lang="scss">
  .navtop{
    width:100%;
    height:0.6rem;
    box-sizing: border-box;
    display: flex;
    background-color:#1e2837;
    p{
    flex:10%;
    height:0.6rem;
    line-height: 0.6rem;
    font-size:0.4rem;
    text-align: center;
    color:#888;
    font-weight: 200;
    }
    dl{
      flex:90%;
      height:0.6rem;
      display: flex;
      justify-content:center;
      dt{
        .logo{
          width:0.4rem;
          height:0.6rem;
          flex:15%;
          background: url("../../static/storeimg/timelogo.png") center center no-repeat;
          background-size:95%;
        }
      }

      .topinfo{
        flex:60%;
        display: flex;
        flex-direction:column;
        
        .text-top{
          padding-top:0.1rem; 
          padding-left:0.05rem;
          height:0.25rem;
          line-height: 0.2rem;
          color:#008ce3;
          font-size:0.17rem;
        }
        .text-btm{
          padding-bottom:0.05rem; 
          padding-left:0.05rem;
          height:0.25rem;
          line-height: 0.2rem;
          color:#a9dcff;
          font-size:0.12rem;
        }
      }
      .topapp{
        flex:25%;
        display: flex;
        justify-content:left;
        align-items:center;
        span{
          width:0.75rem;
          height:0.3rem;
          line-height: 0.3rem;
          text-align: center;
          color:white;
          border-radius: 0.15rem;
          background-color: #0087dc;
          border: 1px solid #0075c4;
        }
      }
    }
  }
  .nav_bar{
    width:100%;
    height:0.6rem;
    background-color:#1c2635;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    dt{
      flex:25%;
      div{
        // width:0.85rem;
        height:0.6rem;
        background:url("../../static/storeimg/logo_mtime.png") center center no-repeat;
        background-size:70%;
      }
    } 
    dd{
      flex:75%;
      height:0.6rem;
      display: flex;
      text-align: center;
      font-size:0.16rem;
      color:white;
      p{
        box-sizing:border-box;
        flex: 1; 
        padding:0 0.06rem;
        height:100%;
        line-height:0.6rem;
        
      }
    }
    .iconfont{
      padding-right:0.04rem;
      line-height:0.6rem;
      text-align: center;
      font-size: 0.2rem;
    }
    .kevinactive{
      border-bottom:0.03rem solid white;
      font-weight: bold;
    }
  }
</style>
