<template>
	<div>
		<ul class="findNav">
			<router-link to="/find/news" active-class="findactive" tag="li">新闻</router-link>
			<router-link to="/find/dvance" active-class="findactive" tag="li">预告片</router-link>
			<router-link to="/find/rank" active-class="findactive" tag="li">排行榜</router-link>
			<router-link to="/find/search"  active-class="findactive" tag="li">影评</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {

			}
		}
	}

</script>
<style type="text/css" scoped lang="scss">
*{
	margin:0;
	padding:0;
}
ul,li{
  list-style:none;
}
	.findNav{liststyle:none;
		display:flex;

li{		flex:1;
			text-align:center;
			height:0.4rem;
      font-size: 0.2rem;
}
    .findactive{
      font-weight: bold;
      color: blue;
    }

	}
</style>
