<template>
	<div v-if="detailinfo" v-bind:style="{backgroundImage:'url(' + detailinfo.image + ')', backgroundRepeat:'no-repeat', backgroundSize: ' 100% auto'}">

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
				<p>{{detailinfo.type[0]}}/{{detailinfo.type[1]}}</p>
				<p>{{headdate}}{{detailinfo.release.location}}上映</p>
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
		<div class="rwtp">
			
			<div class="detailclick">
				<a href="#"><h2>{{detailinfo.personCount}}位演职员</h2><i class="iconfont">&#xe6a7;</i></a>
			</div>
			<div class="detailclickleft"> 	
				导演
				<img :src="detailinfo.director.directorImg" >
				<p >{{detailinfo.director.directorName}}</p>
				<p>{{detailinfo.director.directorNameEn}}</p>

			</div>
			<div class="detailclickright">
				主要演员
				<div class="yanyuanbox">
					<img :src="detailinfo.actorList[0].actorImg">
					<p>{{detailinfo.actorList[0].actor}}</p>
					<p>{{detailinfo.actorList[0].actorEn}}</p>
				</div>
				<div class="yanyuanbox">
					<img :src="detailinfo.actorList[1].actorImg">
					<p>{{detailinfo.actorList[1].actor}}</p>
					<p>{{detailinfo.actorList[1].actorEn}}</p>
				</div>
				
					
			</div>
		</div>
		<div class="tupian">
			<div class="tupian1">
				<a href="#"><h2>{{detailinfo.imageCount}}张图片</h2><i class="iconfont">&#xe6a7;</i></a>
			</div>
			<div class="imgbox">
				<img :src="detailinfo.images[0]">
			</div>
			<div class="imgbox">
				<img :src="detailinfo.images[1]">
			</div>
			<div class="imgbox">
				<img :src="detailinfo.images[2]">
			</div>
			<div class="imgbox">
				<img :src="detailinfo.images[3]">
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from "axios"
	export default{
		data(){
			return{
				detailinfo:null,
				tplist:[]
			}
		},
	 	 created() {
	    this.$store.state.showNav = false
	    //this.$store.commit("navif",false);

	  },
	  mounted(){
	  		//console.log(this.$route.params.jiaid)
	  		axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.jiaid}&locationId=290&t=2018101994032554`).then(res=>{
	  			console.log(res.data)
	  		this.detailinfo = res.data
	  		})
	  },
	  computed:{
	  	headdate(){
	  		var date =new Date(this.detailinfo.release.date||'')
	  		var datetime = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDay()+'日'
	  		return datetime
	  	}
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
		padding-bottom: 5px;
		font-weight: bold;
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
.rwtp{
	width: 100%;
	height:345px;
	overflow: hidden;
	
	background:#fff;
	.detailclick{
		height:47px;
		line-height: 47px;
		padding:0 18px 0 18px;
		i{
			float: right;
			display: inline-block;
			font-size:35px;

		}h2{
			display: inline-block;
		}
	}
	.detailclickleft{
		padding-left: 18px;
		width:102px;
		height:208px;
		float:left;
		img{
			width:100%;
			padding-bottom: 20px;
		}p{
			text-align: center;

		}
	}.detailclickright{
		width:247px;
		height:280px;
		float:right;
		.yanyuanbox{
			width:102px;
			height:102px;
			

			img{
				width:100%;
				
			}
		}
	}
}
.tupian{
	width:100%;
	height:150px;
	background:#fff;
	.tupian1{
		height:47px;
		line-height: 47px;
		padding:0 18px 0 18px;
		i{
			float: right;
			display: inline-block;
			font-size:35px;

		}h2{
			display: inline-block;
		}
	}.imgbox{
			width:80px;
			height:80px;
			float: left;
			padding-left: 10px;
			
			img{
				 width:100%;
				 height:100%;
				
			}
		}

}
</style>