<template>
	<div >
		<div class="cbox">
			<div class="left">
				<a href="#">{{city}}<i class="iconfont">&#xe6a6;</i></a>
			</div>
			<div class="right">
				<i class="iconfont">&#xe6ac;</i><input type="text" placeholder="影片/影院/影人，任你搜">
			</div>
		</div>
		<div class="indexmovie">
			<div class="indexclick">
				<a href="#"><h2>{{biaoti}}( {{$store.state.list.length}} )部</h2><i class="iconfont">&#xe6a7;</i></a>
			</div>
			<ul >
				<li v-for="data in $store.state.list" @click="headclick(data.id)">
					<img :src="data.img" >
					<p class="pf">{{data.r}}</p>
					<p>{{data.tCn}}</p>
				</li>
			</ul>
		</div>
		<div class="nowpaying">
			<a href="#"><h2>{{nowbt}}{{$store.state.list.totalComingMovie}}</h2><i class="iconfont">&#xe6a7;</i></a>
		</div>
		<div class="ggt" v-if="nowplay">
			<a href="#" >
				<img :src="nowplay.image" >
			</a>
		</div>
		<div v-if="Journalism" class="news">
			<h2 style="padding-left: 18px;color: #000;">今日热点</h2>
			<ul>
				<li v-for="data in Journalism">
					<div class="newsleft">
						<img :src="data.img">
					</div>
					<div class="newsright">
						<h3>{{data.title}}</h3>
						<p>{{data.desc}}</p>
					</div>
					
				</li>
			</ul>
		</div>
		<ul class="footer">
			<li><a href="#/nowpaying">首页</a></li>
			<li><a href="#">购票</a></li>
			<li><a href="#">商城</a></li>
			<li><a href="#">发现</a></li>
			<li><a href="#">我的</a></li>
		</ul>
		<router-view></router-view>  
	</div>
</template>
<script type="text/javascript">
import axios from "axios";

	export default{
		data(){
			return{
				city:"北京",
				biaoti:"正在热映",
				nowbt:"即将上映",
				nowplay:null,
				Journalism:null
			}
		},
		methods:{
			headclick(id){
				console.log(id)
				this.$router.push(`/detail/${id}`);			
			}
		},
		mounted(){
			if(this.$store.state.list.length==0){
				
				this.$store.dispatch("nowlist");
				
			}
			axios.get("/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=2018102010153469394").then(res=>{
					//console.log(res.data.areaFirst)
					this.nowplay = res.data.areaFirst
			})	

			axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018102010153440956").then(res=>{
					console.log(res.data.hotPoints)
					this.Journalism = res.data.hotPoints
			})
		}	
	}  
</script>
<style type="text/css" scoped lang="scss">
.cbox{

	background:#f6f6f6;
	border-bottom: 1px solid #d8d8d8;
	padding:9px 18px 9px 9px;
	.left{
		width:20%;
		height:42px;
		float: left;
		font-size:19px;	
		margin-right: 18px;
		line-height: 42px;
		text-align: center;
	}.right{
		width: 74%;
		line-height: 42px;
		text-align: center;
		display: flex;
		background:#fff;
		border: 1px solid #ccc;
		border-radius: 15px;
		i{
			width: 15%;
			font-size:25px;
		}
	}input{
		width: 74%;
		border:none;
		font-size: 16px;
	}
}	
.indexmovie{
	width: 100%;
	height:417px;
	overflow: hidden;
	border-bottom: 1px solid #ccc;
	background:#fff;
	ul{
		padding:0 15px 18px 15px;
		
		height:350.38px;
		li{
			float: left;
			width: 76px;
			height:173px;
			padding-left: 5px;
			padding-right: 5px;
			text-align: center;
			font-size: 15px;
			margin-bottom: 12px;
			img{
				width: 100%;
				height:116px;
			}p{
				padding-top: 5px;
				color:#000;
			}.pf{
				display:inline-block;
				width: 23px;
				height:18px;
				position: relative;
				top:-111px;
				left:22px;
				background:#659d0e;
				color:#fff;
				font-size: 12px;
				z-index: 10;
				line-height: 18px;
			}
		}
	}.indexclick{
		padding:0 18px 0 18px;
			a{
			width: 100%;
			float: left;
			line-height: 44px;
			
		}i{
			float: right;
			display: inline-block;
			font-size: 25px;
		}h2{
			display: inline-block;
		}
	}
}
.nowpaying{

	padding:0 18px 0 18px;
	border-bottom: 1px solid #ccc;
	background:#fff;
	height:42px;
	a{
		width: 100%;
		float: left;
		line-height: 42px;
			
		}i{
			float: right;
			display: inline-block;
			font-size: 25px;
		}h2{
			display: inline-block;
		}
}
.ggt{

	width:100%;
	height:192px;
	margin-top: 20px;
	margin-bottom:20px;
	background:#fff;
	img{
		width:100%;
	}
}
.news{
	background:#fff;
	ul{
		width:100%;
		
		display: flex;
		flex-direction: column;
		
		li{
			
			flex: 1;
			padding-left: 18px;
			border-bottom: 1px solid #ccc;
			padding-bottom: 20px;
			padding-top: 20px;
			padding-right: 18px;
			.newsleft{
				width:135px;
				height:93px;
				float: left;
				img{
					width:100%;
				}
			}.newsright{
				float: left;
				padding-left: 10px;

				h3{
					color:#000;
					line-height: 30px;
				}p{
					color:#000;
					font-style: 14px;

				}
			}
		}
	}
}
.footer{
	width:100%;
	height:50px;
	display:flex;
	background:#fff;
	li{
		flex:1;
		text-align: center;
		line-height: 50px;
		font-size: 18px;

	}
}
</style>