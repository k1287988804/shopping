import Vue from 'vue'
import app from './App.vue'
import RemConfig from './js/remConfig.js'
import Fetch from  './utils/fetch.js'
Vue.prototype.$fetch = Fetch;
RemConfig(750,100)


import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.use(Lazyload)

import './lib/css/mui.css'
import './lib/css/icons-extra.css'
import './css/normalize.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './common/router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)





var vm=new Vue({
    el:'#app',
    render:function(createElement){
        return createElement(app)
    },
    router:router
})