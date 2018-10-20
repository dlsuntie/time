<template>
	<div v-if="detailinfo" v-bind:style="{backgroundImage:'url(' + detailinfo.image + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: ' 100% auto'}">

		<div class="detailnav">
			<a href="#/nowplaying"><i class="iconfont">&#xe697;</i></a>
			<div class="detailnavright">
				<i class="iconfont" style="width: 64px;">&#xe6a0;</i>
				<i class="iconfont">&#xe71d;</i>
			</div>
		</div>
		<div class="fm">
			<div class="fmt">
				<img :src="detailinfo.image">	
			</div>
			<div class="fmleft">
				<h2>{{detailinfo.titleCn}}</h2>
				<p>{{detailinfo.titleEn}}</p>
				
				<p>{{detailinfo.runTime}}</p>
				<div class="see">我想看</div>
				<div class="pf">我要评分</div>
			</div>
		</div>
		<div class="but">
				<p>{{detailinfo.commonSpecial}}</p>
				<div class="buth">
				查影讯/购票
				</div>
		</div>
		<div class="jj">
			
			{{detailinfo.content}}
		</div>
			
	</div>
</template>
<script type="text/javascript">
import axios from "axios"
	export default{
		data(){
			return{
				detailinfo:null
			}
		},
	 	 created() {
	    this.$store.state.showNav = false
	    //this.$store.commit("navif",false);

	  },
	  mounted(){
	  		console.log(this.$route.params.jiaid)
	  		axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.jiaid}&locationId=290&t=2018101994032554`).then(res=>{
	  			console.log(res.data)
	  		this.detailinfo = res.data
	  		})
	  }
	}
</script>
<style type="text/css" scoped lang="scss">
.detailnav{
	width: 100%;
	height:52px;
	line-height: 52px;
	i{
		font-size: 30px;
		color:#fff;
	}
	a{
		padding-left: 15px;
		width: 52px;
		height:52px;
		float: left;
		display:inline-block;
	}.detailnavright{
		padding-right: 15px;
		float: right;
	}
}
.fm{
	width:100%;
	height:192px;
	display:flex;
	
	.fmt{
		float: left;
		width:126px;
		height:190px;

		img{
			width: 100%;
			margin-left: 18px;
			margin-right: 12px;
			border:2px solid #fff;
		}
	}
}.fmleft{
	flex: 1;
	padding-left: 30px;
	position: relative;

	p{
		color:#000;
		font-size: 14px;
	}h2{
		color:#fff;

	}.see{
		width:96px;
		height:40px;
		border:1px solid #000;
		border-radius: 30px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		float:left;
		position: absolute;
		bottom:20px;
	}.pf{
		width:96px;
		height:40px;
		border:1px solid #659c0d;
		border-radius: 30px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		color:#659c0d;
		position: absolute;
		bottom:20px;
		right:13px;
	}
}
.but{
	width:100%;
	height:118px;
	position: relative;
	background:#fff;
	p{
		padding:10px;
		text-align: center;
		color:#f60;
		font-size: 16px;
	}.buth{
		width: 80%;
		position: absolute;
		left:10%;
		top:55px;
		height:48px;
		background:#f60;
		border-radius: 35px;
		text-align: center;
		line-height: 48px;
		font-size: 20px;
		color:#fff;
	}
}
.jj{
	
	padding-top: 10px;
	padding-left: 15px;
	padding-right: 15px;
	font-size: 14px;
	background:#fff;
	color:#000;

}
</style>