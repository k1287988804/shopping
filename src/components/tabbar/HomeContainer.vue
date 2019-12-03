<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.url">
      </mt-swipe-item>
    </mt-swipe>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                        <img src="./../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuList: [
        {
          url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575354871182&di=08f83164c47240b0ae8aecdb96b62dbf&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F79%2F80%2F95z58PICnM7_1024.jpg"
        },
        {
          url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575354871181&di=ef477c3a5f7d5324958e0482829ae883&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F88%2F60%2F25b1OOOPIC00.jpg"
        },
        {
          url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575354871179&di=2a2847fd1633024b6244beba42eb13b9&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F11%2F74%2F88%2F89b1OOOPICc3.jpg"
        },
        { url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575354871172&di=6ae033ee24d5902effb525d7db4d9002&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20141015%2Fnvzhuanglunbotu_3219705.jpg" }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang='less' scoped>
.mint-swipe {
  height: 200px;
  img{
    height:200px;
    width: 600px;
  }
}
.mui-grid-view.mui-grid-9{
  background-color: white;
  border:none;
  img{
    width: 60px;
  }
  .mui-media-body{
    font-size:13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:0;
}
</style>