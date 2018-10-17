<template>
	<div id=app1>
		<a href="#" v-show="isShow">
			<div class="header" >
				<i class="iconfont" @click="isShow =! isShow">&#xe69a;</i>
				<div class="logo">
					<img src="../assets/share07.png">
				</div>
				<p class="lbz">{{lbz}}</p>
				<p class="xz">{{xz}}</p>
				<div class="but">打开APP</div>
			</div>
		</a>
		<div class="film">
			<ul>
				<router-link to="/nowplaying1" tag="li"><img src="../assets/logo_mtime.png"></router-link>
				<router-link to="/nowplaying" activeClass="active" tag="li"><a href="#">首页</a></router-link>
				<router-link to="/shopping" activeClass="active" tag="li"><a href="#">购票</a></router-link>
				<router-link to="/nowplaying3" activeClass="active" tag="li"><a href="#">商城</a></router-link>
				<router-link to="/nowplaying4" activeClass="active" tag="li"><a href="#">发现</a></router-link> 
				<router-link to="/1nowplaying5" tag="li"><i class="iconfont">&#xe6b8;</i></router-link> 
			</ul>
			
		</div>	
		<div class="nowplaying">
			<router-view></router-view>
				
		</div>
	</div>
</template>

<script type="text/javascript">

import axios from "axios"
	export default{
		data(){
			return{
				lbz:"您已收到150元的新人红包",
				xz:"下载时光网App查看 ( 仅限新用户 )",
				isShow:true,
				list:[]
			}
		}
	}
</script>
<style type="text/css" scoped lang="scss">
#app1{

	.header{
		width:100%;
		height:60px;
		position: relative;
		background:#1e2837;
		
	}i{
		font-size:25px;
		position: absolute;
		line-height: 60px;
		padding-left:3px;
		color:#bbb;
		z-index: 10;
	}.logo{
		position: absolute;
		padding-left:36px;
		width:48px;
		height:60px;
		margin-right:9px;
		img{
			width: 100%;
			margin-top:6px;
		}
	}.lbz{
		position: absolute;
		padding-left:90px;
		top:5px;
		font-size:17px;
		color:#008ce3;
	}.xz{
		position: absolute;
		padding-left:90px;
		top:32px;
		color:#a9dcff;
		font-size:13px;
	}.but{
		width: 78px;
		height:30px;
		line-height: 30px;
		text-align: center;
		background-color: #0087dc;
		border-radius:24px;
		color: #fff;
		font-weight: bold;
		position: absolute;
		right: 8px;
		top:15px;
	}
}
.film{
	width: 100%;
	height:53px;
	background:#1e2837;
	position: absolute;
	top:60px;
	ul{
		display: flex;
		height:100%;
		li{
			flex: 1;
			text-align: center;
			line-height: 60px;
			img{
				width: 100%;
				margin-top:15px;
				margin-left: 10px;
			}
		}a{
			color:#bbb;
		}.active{
				border-bottom:2px solid #fff;
				color:#fff;
				font-weight: bold;			
		}i{
			text-align: center;
		}
		
	}
}
.nowplaying{
	
	position: absolute;
	top:113px;
}
</style>