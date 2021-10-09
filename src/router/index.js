// 创建路由对象

import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入所有路由
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//使用路由插件
Vue.use(VueRouter)

export default new VueRouter({
    routes : [
        {
            path : '/msite',    //主页
            component : Msite ,
            meta : {                // 绑定自定义属性
                showFooter : true,  // 为了显示底部的组件
            }
        },
        {
            path : '/order',    //订单
            component : Order ,
            meta : {                // 绑定自定义属性
                showFooter : true,  // 为了显示底部的组件
            }
        },
        {
            path : '/profile',   //个人
            component : Profile ,
            meta : {                // 绑定自定义属性
                showFooter : true,  // 为了显示底部的组件
            }
        },
        {
            path : '/search',   //搜索
            component : Search ,
            meta : {                // 绑定自定义属性
                showFooter : true,  // 为了显示底部的组件
            }
        },
        {
            path : '/login',    //登陆注册
            component : Login,
        },
        {   
            path : '/',      //默认的是msite
            redirect : '/msite',
        }
    ]
})