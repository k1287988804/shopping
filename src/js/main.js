import Vue from 'vue'
import app from './../App.vue'
import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.use(Lazyload)

import './../lib/css/mui.css'
import './../lib/css/icons-extra.css'
import './../css/normalize.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)



var vm=new Vue({
    el:'#app',
    render:function(createElement){
        return createElement(app)
    },
    router:router
})