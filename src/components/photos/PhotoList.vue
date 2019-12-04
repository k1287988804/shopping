<template>
  <div class="imageListContainer">
      <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
                        <a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-7.html">
							体育
						</a>
					</div>
				</div>
			</div>
			<router-link :to="'/home/photoInfo/'+1" tag="ul">
			<li v-for="item in imageList" :key="item">
				<img v-lazy="item">
			</li>
			</router-link>
  </div>
</template>

<script>
import mui from './../../lib/js/mui.min.js'




export default {
    data(){
		return {
			 imageList:[
				"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg",
				"http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg",
				"http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
				"http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg",
				"http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg",
				"http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg"
			]
		}
	},
	mounted(){
		mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	components:{

	}
};
</script>

<style lang='less' scoped>
.imageListContainer{
	ul{
		padding: 0;
		li{
			list-style: none;
			position: relative;
			.info{
				color:white;
				.info-title{
					font-size:14px;
				}
				.info-body{
					font-size:13px;
				}
			}
		}
	}
	img{
		width:100%;
	}
	img[lazy=loading] {
	width: 40px;
	height: 300px;
	margin: auto;
	}
}
</style>