<template>
  <div id="topic">
    <div class="divTopic">
      <img src="../../../static/storeimg/1018002.jpg" alt="SW">
      <img src="../../../static/storeimg/1018003.jpg" alt="ZL">
      <img src="../../../static/storeimg/1018004.jpg" alt="MS">
      <img src="../../../static/storeimg/1018005.jpg" alt="BX">
    </div>

    <div class="acttitle">
      <h4>Star Wars </h4>
      <h3>星球大战</h3>
    </div>

    <ul class="actdd_fix">
      <li>
        <img src="../../../static/storeimg/1018101.jpeg" alt="星球大战LOGO款马克杯" />
        <p>星球大战LOGO款马克杯</p>
        <span>￥ 69</span>
      </li>
      <li>
        <img src="../../../static/storeimg/1018102.jpeg" alt="星球大战 Q萌形象T恤" />
        <p>星球大战 Q萌形象T恤</p>
        <span>￥ 109</span>
      </li>
      <li>
        <img src="../../../static/storeimg/1018103.jpeg" alt="Hot toys侠盗一号 琴·厄索1:6人偶" />
        <p>Hot toys侠盗一号 琴·厄索1:6人偶</p>
        <span>￥ 1380</span>
      </li>
      <li>
        <img src="../../../static/storeimg/1018104.jpeg" alt="星球大战长飘带棒球帽" />
        <p>星球大战长飘带棒球帽</p>
        <span>￥ 69</span>
      </li>
      <li>
        <img src="../../../static/storeimg/1018105.jpeg" alt="星球大战 暴风兵炫酷3D背包" />
        <p>星球大战 暴风兵炫酷3D背包</p>
        <span>￥ 299</span>
      </li>
      <li>
        <img src="../../../static/storeimg/1018106.jpeg" alt="星球大战 风暴兵3D手机壳" />
        <p>星球大战 风暴兵3D手机壳</p>
        <span>￥ 19.90</span>
      </li>
    </ul>

    <div class="actmore">
      <a href="">更多商品 &gt</a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  #topic{
    width:100%;
    background-color:white;
    .divTopic{
      width:100%;
      height:1.7rem;
      background:url("../../../static/storeimg/1018001.jpg") center center no-repeat;
      background-size: cover;
      display: flex;
      justify-content:space-around;
      align-items:flex-end;
      img{
        width:0.8rem;
        height:0.8rem;
      }
    }
    .acttitle{
        margin-top:0.05rem;
        width:100%;
        display: flex;
        flex-direction:column;
        align-items: center;
        color:#444;
        h4{
          font-size: 0.12rem;
          font-weight: 300;
        }
        h3{
          font-size: 0.2rem;
         
        }
      }
    .actdd_fix{
      width:100%;
      display: flex;
      justify-content: center;
      flex-wrap:wrap;
      li{
        width:32%;
        height:1.3rem;
        margin-top:0.05rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width:0.85rem;
          height:0.85rem;
        }
        p{
          height:0.13rem;
          font-size: 0.12rem;
          line-height: 0.13rem;
          width:1.1rem;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        span{
          font-size: 0.15rem;
          color:#f26262;
        }
      }
    }
    .actmore{
      width:100%;
      height:0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        width:1.3rem;
        height:0.36rem;
        line-height: 0.36rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius:0.18rem;
        background-color:#f26262;
        color:white;
        font-size: 0.15rem;

      }
    }
  }
</style>


