<template>
	<div id="box">
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
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				lbz:"您已收到150元的新人红包",
				xz:"下载时光网App查看 ( 仅限新用户 )",
				isShow:true
			}
		}
	}
</script>
<style type="text/css" scoped lang="scss">
#box{
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


</style>