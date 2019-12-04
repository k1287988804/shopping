<template>
  <div class="app-container">
      <mt-header fixed title="首页布局"></mt-header>
      <transition>
	 	<router-view></router-view> 
	  </transition>
      <nav class="mui-bar mui-bar-tab">
			<router-link class="tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="tab-item" to="/search">
				<span class="mui-icon mui-icon-search "></span>
				<span class="mui-tab-label">搜索</span>  
			</router-link>
		</nav>

  </div>
</template>

<script>
export default {
	data(){
		return {
		
		}
	}
};
</script>

<style lang='less' scoped>
    .app-container{
		padding-top:40px;
		overflow-x:hidden;
		padding-bottom:50px;
		.tab-item{
			display: table-cell;
			overflow: hidden;
			width: 1%;
			height: 50px;
			text-align: center;
			vertical-align: middle;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #929292;
			.mui-icon{
				top: 3px;
				width: 24px;
				height: 24px;
				padding-top: 0;
				padding-bottom: 0;
			}
			.mui-icon ~ .mui-tab-label{
				font-size: 11px;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.mui-icon:active{
				background: none;
			}
		}
		.mui-active{
			color: #5aa4f8;
		}
	}
	.v-enter{
		opacity:0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity:0;
		transform: translateX(-100%);
		position:absolute;  //不飘
	}
	.v-enter-active,.v-leave-active{
		transition:all ease 0.5s;
	}

</style>