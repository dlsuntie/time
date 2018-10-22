<template>

    <div><div class="newsbanner">
      <a>
        <img :src="newstitle.imageUrl"/>
        <h2>
          <b>{{newstitle.title}}</b>

        </h2>
      </a>
    </div>
    <div>

     <ul class="newslist">
       <li v-for="newslist in newsList"  >
      <div v-if="newslist.type==0||newslist.type==2" class="newsListFirSty">
       <div  class="lImg" >
         <a href="">

           <img :src="newslist.image">
           <i class="ivideo" v-if="newslist.type==2"> </i>
         </a>
       </div>
       <div class="rtitle">
         <ul class="rTitle">
           <li class="bTitle">{{newslist.title}}</li>
           <li>
             <span class="firstSpan">1小时前</span><span>评论{{newslist.commentCount}}</span>
           </li>

         </ul>
       </div>
    </div>
         <div v-else="newstitle.type ==1" class="secNewsStyle">
              <div class="newsOut">
                <ul>
                  <li>{{newslist.title}}</li>
                  <li class="imges">
                    <img :src="newslist.images[0].url1" alt="">
                    <img :src="newslist.images[1].url1" alt="">
                    <img :src="newslist.images[2].url1" alt="">
                  </li>
                  <li><span class="firstSpan">1小时前</span><span>评论{{newslist.commentCount}}</span></li>
                </ul>
              </div>

         </div>
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
            newstitle:[],
            newsList:[],

          }
        },

      mounted(){
          axios.get("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api").then(res=>{

            this.newstitle = res.data.news


          }).catch(error=>{
            console.log(error)
          })

        axios.get("/Service/callback.mi/News/NewsList.api?t=2018101918172214118&pageIndex=1").then(res=>{



          this.newsList=res.data.newsList
          console.log(res.data.newsList)
        }).catch(error=>{
          console.log(error)
        })

      },


    }
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }

  .newsbanner{
    flex: 1;
   height: 2.16rem;

    position: relative;

    overflow: hidden;
    img{
      width: 100%;
      height: auto;
    }
    h2{
      background: rgba(0,0,0,0.5);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.12rem 0 0.12rem;
      text-align: center;
      b{
        font-size: 0.18rem;
        color: white;
        display: block;
      }
    }


  }
  .newslist{
    padding: 0 0 0 0.18rem;
    .newsListFirSty {
      display: flex;
      border-bottom: 1px solid #ddd;
      padding: 0.18rem 0 0.16rem;
      cursor: pointer;
      position: relative;
     .lImg{

        width: 0.9rem;
display: inline-block;
        height: 0.9rem;

        a {
          display: block;
          overflow: hidden;
          width: 0.9rem;

          height: 0.9rem;
          position: relative;
          img {
           width: 150%;
            height: auto;


          }
          .ivideo{

            position: absolute;
            bottom: 0.04rem;
            right: 0.04rem;
            width: 0.35rem;
            height: 0.35rem;
            overflow: hidden;
            display: inline-block;

            background: url(" ../assets/img/viceoplay.png")no-repeat center center;
            background-size: cover;
          }
        }
      }
    }
    }

  .rtitle{

  }
  .rTitle{
    display: inline-block;
    padding: 0 0.18rem;
    .bTile{
      margin-top: -0.024rem;
      position: relative;
      height: 8em;
    }
  }
  .firstSpan{
    padding-right: 0.45rem;
  }

  .secNewsStyle{

    border-bottom: 1px solid #ddd;
    padding: 0.18rem 0 0.06rem;
    cursor: pointer;
    position: relative;
    .newsOut{
      padding-left: 0;
      ul{
        height: auto;
        margin-top: -0.024em;
        position: relative;
        .imges{
          color: #777;
          padding: 0.12rem 0 .024rem;
          width: 100%;
          display: flex;
          img{
            display: block;
            width: 1.14rem;
            height: 0.78rem;
            margin: auto;
            overflow: hidden;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
