import Vue from 'vue'
import app from './../App.vue'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
import './../lib/css/mui.css'




var vm=new Vue({
    el:'#app',
    render:function(createElement){
        return createElement(app)
    }
})