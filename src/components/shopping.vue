<template>
	<div>
	 <div class="nav">
	 	<ul>
	 		<li><a href="#">大连∨</a></li>
	 		<li><input type="text" placeholder="筛选电影" ></li>
	 		<li><button>搜索</button></li>
	 	</ul>
	 </div>
	
	 <div class="choice" @click="isShow=!isShow">
	 	<ul>
	 		<li>离我最近<span >▼</span></li>
	 		<li>全城<span>▼</span></li>
	 		<li>影厅特效<span class="span3">▼</span></li>
	 	</ul>
	 </div>
	
	 	<div class="lwzj" v-show="isShow">
	 		<div>离我最近</div>
	 		<div>价格最低</div>
			 </div>

			<div class="swiper-container">
    		<div class="swiper-wrapper">
        <div class="swiper-slide"><a href=""><img src="../../static/images/123.jpg" alt=""></a></div>
        <div class="swiper-slide"><a href=""><img src="../../static/images/456.jpg" alt=""></a></div>
    		</div>
    	<div class="swiper-pagination"></div>

    
		</div>
		<div class="location"><span>以下影院均为时光网自营</span></div>
		
		<div class="cinema">
			<ul>
				<li v-for="data in datalist" @click="handleClick()">
					<div><span>{{data.cinameName}}</span></div>
					<div class="piaojia">
						<b>24</b>
						<span>元起</span>
					</div>
					<p><span>{{data.address}}</span></p>
					<div>
						<i>3D</i>
						<i>VIP</i>
						<i>4K</i>
						<i>情侣座</i>
					</div>
				</li>
			</ul>
		</div>

	<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
import Swiper from "swiper";
import axios from "axios";
import "swiper/dist/css/swiper.css";

	
	export default{
		data(){
			return{
			  isShow:false,
			  datalist:[111,222,333]

			  }
		},
		methods:{
			handleClick(){
				console.log(111),
				location.href="/#/cinemadetail"
			}
		},
		mounted(){
			axios.get("/api/proxy/ticket/onlineCinemasByCity.api?locationId=729&_=1539775173238").then(res=>{
				this.datalist=res.data.data.cinemaList
				console.log(this.datalist)
			}).catch(error=>{
				console.log(error)
			})

			var mySwiper = new Swiper ('.swiper-container', {
    			loop: true, // 循环模式选项
    			 autoplay: {
        		delay: 2500,
        		disableOnInteraction: false,
      		},
    			// 如果需要分页器
    			pagination: {
      			el: '.swiper-pagination',
    			}
   			 })

			
		}

 }
	
</script>
	

<style type="text/css">
	*{
		padding: 0;
		margin: 0;
	}
	ul,li{
		list-style: none;
	}
	.nav{
	position: relative;
	width: 100%;
	height: 60px;
	background: #eee;
	};
	.nav ul{
		flex: 1;

		height: 60px;
		width: 100%;
	}
	.nav ul li{
		float: left;
	}
	.nav ul li{
		width: 25%;
		padding-top: 18px;
	}
	.nav ul li a{
		padding-left: 16px;
		text-decoration: none;
		font-size: 16px;	
	}
	.nav ul li:nth-child(2){
		width: 50%;
		padding-top: 8px;
	}
	.nav ul li input{
		height: 40px;
		border-radius: 8px;
		text-indent:30px;
		font-size: 12px;
		background-image: url(../../static/images/12345.png);
		background-repeat: no-repeat;
		background-position: left center;
	}
	.nav ul li:nth-child(3){
		padding-top: 8px;
	}
	.nav button{
		font-size: 14px;
		height: 40px;
		width:70px;
		background: #eee;
		border:1px solid white;
		border-radius: 6px;
	}

	.choice{
		width: 100%;
		height: 45px;
		border-bottom:1px solid #ccc;
	}
	.choice ul{
		flex: 1;
	}
	.choice ul li{
		float: left;
		width: 33%;
		padding-top: 12px;
		text-indent: 25px;
		font-size: 14px;
		color: #999;

	}
	.choice ul li span{
		font-size: 4px;
		padding-right: 28px;
		border-right: 1px solid #ccc;
	}
	.choice ul li .span3{
		border-right:none;
	}
	.lwzj{
		height:70px;
		width:100%;
		text-indent:20px;
	}
	.lwzj div{
		font-size:16px;
		line-height:35px;
		height:32px;
		border-bottom:1px solid #ccc;
	}
	.swiper-container {
    width: 100%;
    height: 87.5px;
	}
	.swiper-slide img{
		height:87.5px;
	}
	.location{
		height:30px;
		font-size:12px;
		background-color:#eee;
		text-align:center;
		line-height:30px;
		color:#666;
	}
	.cinema ul li{
		border-bottom:1px solid #ccc;
		padding:10px;
	}
	.piaojia{
		float:right;
	}
</style>