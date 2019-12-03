<template>
  <div class="newsinfo-container">
      <h2 class="title">新闻详情页</h2>
      <p class="subtitle">
          <span>发表时间：</span>
          <span>点击：0次</span>
      </p>
      <hr>
      <div class="content">{{content}}---{{id}}</div>
      <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from './../subcomponents/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            content:"河北省文化和旅游厅相关人士在接受采访时说：“ 长城是促进文化交流的纽带， 是增加民众友谊的桥梁， 河北真诚希望国内外游客更多地了解长城河北段的独特文化魅力， 更多地来河北长城旅游， 大家携手， 共同把长城这一人类文化的宝贵财富保护好、 传承好、 宣传好， 共同促进长城文化的弘扬与传播。"
        }
    },
    created(){
    },
    methods:{

    },
    components:{
        'comment-box':comment
    }
};
</script>

<style lang='less' scoped>
.newsinfo-container{
    padding:0;
    .title{
        color:red;
        padding-top:5px;
        padding-left:10px;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display:flex;
        justify-content: space-between;
        padding-left:10px;
        padding-right:10px;
    }
}
</style>