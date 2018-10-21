<template>
<div>

	<div class="title">
		<div class="image1"><a href="#"></a></div>
		<div class="image2"><a href="#"></a></div>
	</div>

	<header>
		<div><h3>{{cinema}}</h3></div>

		<div v-show="is3D" class="biaoqian"></div>	

		<div class="location">
			<div><div></div></div>
			<div><div></div></div>
		</div>
	</header>

	
  	<div class="swiper-container">
    	<div class="swiper-wrapper" >
            <div v-for="data,index in imagelist" @click="nameChange(data,index)" class="swiper-slide" :style="{background:'url('+data.img+') no-repeat center'}"></div>
    	</div>
    	<div class="swiper-pagination"></div>
    </div>
	
	<div class="detail">
		<h3>{{type}}</h3>
		<div>{{length}} - {{type}}</div>
	</div>	
	
	<div class="date">
		<ul>
			<li v-for="data,index in date">{{date[index]}}</li>
		</ul>	
	</div>
	<ul>
		<li v-for="data in tickets">	
			{{index}}
			{{hall}}
			
		</li>
	</ul>
</div>
</template>

<script type="text/javascript">

import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";	
	export default{
		data(){
			return{
				cinema:"",
				is3D:false,
				imagelist:[],
				length:"",
				type:"",
				title:"" ,
				date:[],
				tickets:[],

				hall:"",
				index:2
			}
		},
		methods:{
			nameChange(data,index){
				this.title=data.title
				this.length=data.length
				this.type=data.type
				this.date=data.showDates
				this.index=index
				
			}
		},
		mounted(index){
			axios.get("/cinema/showtime.api?t=2018101814561838647&cinemaId=2679").then(res=>{
				this.cinema=res.data.data.cinema.name
				this.is3D=res.data.data.cinema.feature.has3D
				this.imagelist=res.data.data.movies
				this.picture=this.imagelist
				this.tickets=res.data.data.showtimes[this.index].list
				this.hall=this.tickets[this.index].hall
			}).catch(console.log(111))
				
				this.$nextTick(res=>{
					var swiper = new Swiper('.swiper-container', {
     				effect: 'coverflow',
      				grabCursor: true,
      				centeredSlides: true,
      				slidesPerView: 'auto',
      				coverflowEffect: {
        			rotate: 50,
        			stretch: 0,
        			depth: 100,
        			modifier: 1,
        			slideShadows : true,
      				},
	      			pagination: {
	        			el: '.swiper-pagination',
	      			},
    			})
      		})
		},
		updated(index){
			axios.get("/cinema/showtime.api?t=2018101814561838647&cinemaId=2679").then(res=>{
				this.tickets=res.data.data.showtimes[this.index].list
				this.hall=this.tickets[this.index].hall
			}).catch(console.log(222))
		},
	}
</script>

<style type="text/css">
	.title{
		height: 60px;
		width: 100%;
		background-color:black;
	}
	.image1{
		margin-left:20px;
		margin-top:10px;
		float:left;
		height:45px;
		width:45px;
		background:url(../../static/images/222.png) no-repeat;
		background-size: auto 2.2rem;

	}
	.image2{
		margin-right:20px;
		margin-top:10px;
		float:right;
		height:45px;
		width:45px;
		background:url(../../static/images/111.png) no-repeat;
		background-size: auto 2.2rem;
	}
	header{
		height:50px;
	}
	.biaoqian{
		float:left;
		height:36px;
		width:36px;
		background:url(../../static/images/3d.png) no-repeat;
		background-size: auto 2em;
	}
	.location{
		float:right;
		height:30px;
		width:150px;
		margin-left:110px;

	}
	.location div{
		float:left;
		height:30px;
		width:50px;
		border-left:1px solid #ccc;	
		padding-left:20px;
	}
	.location div div{
		height:30px;
		width:30px;
		background:url(../../static/images/tel.png) no-repeat;
		background-size: auto 2em;	
		border-left:none;
	}
	.location div:nth-child(2) div{
		background:url(../../static/images/location.png) no-repeat;
		background-size: auto 1.7em;
	}
	.swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width:100%;
      height: 15em;

    }
    .detail{

      height:60px;
      text-align:center;
      border-bottom:1px solid #ccc;
	}
	.detail h3{
	margin:0 auto;
      height:25px;
	}
	.detail div{
	font-size:16px;
      height:25px;
      color:#ccc;
      line-height:25px;

	}

</style>