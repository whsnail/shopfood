import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import ShopSelfInfo from '../pages/ShopSelfInfo/ShopSelfInfo.vue'
import ShopGoods from '../pages/ShopSelfInfo/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/ShopSelfInfo/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/ShopSelfInfo/ShopRatings/ShopRatings.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/msite",
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/search",
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/order",
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/profile",
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/toLogin",
            component:Login
        },
        {
            path:"/shop",
            component:ShopSelfInfo,
            children:[
                {
                    path:"/shop/goods",
                    component:ShopGoods
                },
                {
                    path:"/shop/ratings",
                    component:ShopRatings
                },
                {
                    path:"/shop/info",
                    component:ShopInfo
                },
                {
                    path:"",
                    component:ShopGoods
                }
            ]
        }
    ]
})