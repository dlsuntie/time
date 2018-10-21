<template>
  <div id="store">
    <!-- <topbar></topbar> -->
    <!-- 搜索框 -->
    <div class="ksSearch">
      <div class="iconfont icon-search">搜索正版电影周边</div>
      <i class="iconfont icon-cart"></i>
    </div>
  
    <!-- 轮播图 -->
    <div class="vsswiper">
     <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <img class="swiper-slide" src="../../static/storeimg/vs001.jpeg" style="height:2rem"/>
          <img class="swiper-slide" src="../../static/storeimg/vs004.jpeg" style="height:2rem"/>
          <img class="swiper-slide" src="../../static/storeimg/vs002.jpeg" style="height:2rem"/>
          <img class="swiper-slide" src="../../static/storeimg/vs003.jpeg" style="height:2rem"/>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination pospull"></div>
      </div>
      
    </div> 

    <!-- 分类 -->
    <ul class="classify">
      <li>
        <a href="#" @click="goods1()">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161133.99290860.jpg" alt="模玩">
          <p>模玩</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161141.82690725.jpg" alt="数码">
          <p>数码</p>
        </a>
        </li>
        <li>
        <a href="#">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161148.25620959.jpg" alt="服饰">
          <p>服饰</p>
        </a>
        </li>
        <li>
        <a href="#">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161155.82939104.jpg" alt="家居">
          <p>家居</p>
        </a>
        </li>
        <li>
        <a href="#">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161224.10155577.jpg" alt="星战">
          <p>星战</p>
        </a>
        </li>
        <li>
        <a href="#">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161315.97010262.jpg" alt="漫威">
          <p>漫威</p>
        </a>
        </li>
        <li>
        <a href="#">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161325.50615572.jpg" alt="蝙超">
          <p>蝙超</p>
        </a>
        </li>
        <li>
        <a href="#">
          <img src="http://img5.mtime.cn/mg/2017/02/07/161342.70896250.jpg" alt="全部">
          <p>全部</p>
        </a>
      </li>
    </ul> 

    <classify></classify>
    <topic></topic>
    <model></model>
    <smodel></smodel>
    <pmodel></pmodel>
    <jmodel></jmodel>
    <interest></interest>
  </div>
</template>

<script>

import classify from "./ststore/classify.vue"
import topic from "./ststore/topic.vue"
import model from "./ststore/model.vue"
import smodel from "./ststore/smodel.vue"
import pmodel from "./ststore/pmodel.vue"
import jmodel from "./ststore/jmodel.vue"
import interest from "./ststore/interest.vue"


// 轮播
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  components:{
    
    classify,
    topic,
    model,
    smodel,
    pmodel,
    jmodel,
    interest,
    
  },
  methods:{
    goods1(){
      console.log(123)
      location.href="/#/goods.vue"
    }
  },
  mounted() {

    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style scoped lang="scss">
#store{
  background-color:#eee;
}
.vsswiper {
  width: 100%;
  height: 2.45rem;
  background-color:white;
}
.swiper-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.ksSearch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0.5rem;
  background: #ddd;
  div {
    width: 2.74rem;
    height: 0.4rem;
    padding: 0 0.08rem;
    font-size: 0.17rem;
    color: #888;
    line-height: 0.4rem;
    border-radius: 0.1rem;
    background-color: white;
  }
  i {
    font-size: 0.3rem;
    color: blue;
    margin-left: 0.05rem;
  }
}
.classify{
  
    width:100%;
    height:2rem;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items: center;
    background-color:white;
    li{
      width:0.8rem;
      height:0.8rem;
      display: flex;
      justify-content:center;
      align-items: center;
      a{
        text-decoration: none;
        text-align: center;
        color:#ccc;
        font-size: 0.17rem;
        
        img{
          width:0.4rem;
          height:0.4rem;
        }
      }
    }
  
}

</style>
