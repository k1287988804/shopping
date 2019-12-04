<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="最多吐槽120个字" ></textarea>
      <mt-button type="primary" size="large" >发表评论</mt-button>
      <div class="cmt-list">
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间:2019-12-12
              </div>
              <div class="cmt-body">
                  锄禾日当午，汗滴禾下土{{id}}
              </div>
          </div>
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间:2019-12-12
              </div>
              <div class="cmt-body">
                  锄禾日当午，汗滴禾下土
              </div>
          </div>
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间:2019-12-12
              </div>
              <div class="cmt-body">
                  锄禾日当午，汗滴禾下土
              </div>
          </div>
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间:2019-12-12
              </div>
              <div class="cmt-body">
                  锄禾日当午，汗滴禾下土
              </div>
          </div>
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间:2019-12-12
              </div>
              <div class="cmt-body">
                  锄禾日当午，汗滴禾下土
              </div>
          </div>
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间:2019-12-12
              </div>
              <div class="cmt-body">
                  锄禾日当午，汗滴禾下土
              </div>
          </div>         
      </div>
      <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            pageIndex:1
        }
    },
    props:['id'],
    methods:{
        postComments(){
            
        }
    },

};
</script>

<style lang='less' scoped>

.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height:85px;
        width:100%;
        margin:0;
    }
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size:13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 30px;
                text-indent: 2em;
            }
        }
    }
}
</style>