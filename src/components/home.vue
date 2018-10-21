<template>
	<div id="app">
		<div class="home">
			<ul>
				<router-link to="/nowplaying1" tag="li"><img src="../assets/logo_mtime.png"></router-link>
				<router-link to="/nowplaying" activeClass="active" tag="li"><a href="#">首页</a></router-link>
				<router-link to="/shopping" activeClass="active" tag="li"><a href="#">购票</a></router-link>
				<router-link to="/nowplaying3" activeClass="active" tag="li"><a href="#">商城</a></router-link>
				<router-link to="/nowplaying4" activeClass="active" tag="li"><a href="#">发现</a></router-link> 
				<router-link to="/1nowplaying5" tag="li"><i class="iconfont">&#xe6b8;</i></router-link> 
			</ul>
			
		</div>	
		
	     <router-view></router-view>   
	   
	</div>
</template>

<script type="text/javascript">
import axios from "axios"

	export default{
		data(){
			return{
				list:[]
			}
		}
	}
</script>
<style type="text/css" scoped lang="scss">
#app{
	.home{
		width: 100%;
		height:53px;
		background:#1e2837;

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

}
</style>