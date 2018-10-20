<template>
  <div>
    <ul class="classify">
      <li class="clstop">
        <ul>
          <li class="clsleft"></li>
          <li class="clsright">
            <div class="ri-top"></div>
            <div class="ri-btm"></div>
          </li>
        </ul>
      </li>
      <li class="clsbtm"></li>
    </ul>
  </div>
</template>

<script>
  export default{
    
  }
</script>

<style scoped lang="scss">
.classify{
  width:100%;
  height:3.7rem;
  display:flex;
  flex-direction:column;
  margin-top:0.2rem;
  background-color:white;
  .clstop{
    width:100%;
    height:2.48rem;
    ul{
      display: flex;
      .clsleft{
        flex:1;
        height:2.48rem;
        border-right:0.01rem solid #ccc;
        background: url("../../../static/storeimg/left.jpeg") center center no-repeat;
        background-size: 100%;
      }
      .clsright{
        flex:1;
        height:2.48rem;
        display: flex;
        flex-direction:column;
        div{
          width:100%;
          flex:1;
        }
        .ri-top{
          border-bottom:0.01rem solid #ccc;
          background: url("../../../static/storeimg/up.jpeg") center center no-repeat;
          background-size: 100%;
        }
        .ri-btm{
          background: url("../../../static/storeimg/down.jpeg") center center no-repeat;
          background-size: 100%;
        }
      }

    }
  }
  .clsbtm{
    width:100%;
    height:1.22rem;
    border-top:0.01rem solid #ccc;
    background: url("../../../static/storeimg/btm.jpeg") center center no-repeat;
    background-size: 100%;
  }
}
</style>

