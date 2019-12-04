<template>
  <div class="GoodsListContainer">
      <div class="goods-list-item">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07270cc09689eb9b13b29aa9f6bc41eb.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
          <h3 class="title">小米CC9 Pro</h3>
          <div class="info">
              <p class="price">
                  <span class="now">¥899</span>
                  <span class="old">¥2399</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
              </p>
          </div>
      </div>
      <div class="goods-list-item">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
          <h3 class="title">小米9 5GPro</h3>
          <div class="info">
              <p class="price">
                  <span class="now">¥3699</span>
                  <span class="old">¥5000</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
              </p>
          </div>
      </div>
      <div class="goods-list-item">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
          <h3 class="title">Redmi 8</h3>
          <div class="info">
              <p class="price">
                  <span class="now">¥899</span>
                  <span class="old">¥2399</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
              </p>
          </div>
      </div>
           <div class="goods-list-item">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c924c3f3436b6934495fd98f159ee3f7.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
          <h3 class="title">Redmi 8i</h3>
          <div class="info">
              <p class="price">
                  <span class="now">¥1899</span>
                  <span class="old">¥2399</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
              </p>
          </div>
      </div>
           <div class="goods-list-item">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
          <h3 class="title">Redmi Note8 Pro</h3>
          <div class="info">
              <p class="price">
                  <span class="now">¥1299</span>
                  <span class="old">¥2399</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
              </p>
          </div>
      </div>
           <div class="goods-list-item">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
          <h3 class="title">Redmi Note 8 </h3>
          <div class="info">
              <p class="price">
                  <span class="now">¥999</span>
                  <span class="old">¥2399</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.GoodsListContainer{
    display:flex;
    flex-wrap: wrap;
    padding:0 8px;
    justify-content: space-between;
    .goods-list-item{
        padding: 2px;
        margin-top:5px;
        border:1px solid #ccc;
        box-shadow: 0 0 4px #ccc;
        width:49%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
            font-size:14px;
        }
        img{
            width: 100%;
        }
        .info{
            p{
                margin:0;
                padding: 5px;
            }
            .now{
                color: red;
                font-weight: bold;
                font-size:16px;
            }
            .old{
                text-decoration: line-through;
                font-size:13px;
                margin-left:10px;
            }
            .sell{
                display: flex;
                justify-content: space-between;
            }
            background-color: rgb(247, 242, 242);
        }
    }
}
</style>