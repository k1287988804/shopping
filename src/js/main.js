import Vue from 'vue'
import app from './../App.vue'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
import './../lib/css/mui.css'
import './../lib/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'



var vm=new Vue({
    el:'#app',
    render:function(createElement){
        return createElement(app)
    },
    router
})