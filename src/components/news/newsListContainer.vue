<template>
  <div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo/1">
						<img class="mui-media-object mui-pull-left" src="https://img-blog.csdnimg.cn/2019091813595558.png">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>发表时间：{{time|shijian}}</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo/2">
						<img class="mui-media-object mui-pull-left" src="https://img-blog.csdnimg.cn/2019091813595558.png">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>发表时间：{{time|shijian}}</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo/3">
						<img class="mui-media-object mui-pull-left" src="https://img-blog.csdnimg.cn/2019091813595558.png">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>发表时间：{{time|shijian}}</p>
						</div>
					</router-link>
				</li>

			</ul>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  data(){
    return {
      time:new Date()
    }
  },
  filters:{
    shijian:function(data,pattern="YYYY-MM-DD HH:mm:ss"){
      return moment(data).format(pattern)
    }
  }
};
</script>

<style lang='less' scoped>

</style>