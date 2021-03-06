import VueRouter from 'vue-router'

import HomeContainer from "./../components/tabbar/HomeContainer.vue"
import MemberContainer from './../components/tabbar/MemberContainer.vue'
import ShopcarContainer from './../components/tabbar/ShopcarContainer.vue'
import SearchContainer from './../components/tabbar/SearchContainer.vue'
import NewsListContainer from './../components/news/newsListContainer.vue'
import NewsInfoContainer from './../components/news/newsInfoContainer.vue'
import PhotoListContainer from './../components/photos/PhotoList.vue'
import PhotoInfo from './../components/photos/PhotoInfo.vue'
import GoodsListContainer from './../components/goods/GoodsListContainer.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home',component:HomeContainer},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newsList',component:NewsListContainer},
        {path:'/home/newsInfo/:id',component:NewsInfoContainer},
        {path:'/home/photolist',component:PhotoListContainer},
        {path:'/home/photoInfo/:id',component:PhotoInfo},
        {path:'/home/GoodsList',component:GoodsListContainer},
    
    ],
    linkActiveClass:'mui-active'
})

export default router