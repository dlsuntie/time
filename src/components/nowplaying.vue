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
			<a href="#"><h2>{{nowbt}}</h2><i class="iconfont">&#xe6a7;</i></a>
		</div>
		<div class="ggt">
			<a href="#" >
				<img src="data.image" >
			</a>
		</div>
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
				
			}/*;
			if(this.$store.state.yglist.length==0){

				this.$store.dispatch("yglist");
			}*/	
			
		}	
	}  
</script>
<style type="text/css"scoped lang="scss">
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
</style>