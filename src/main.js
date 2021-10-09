// 外卖系统的入口文件
import Vue from 'vue'
import App from './App.vue'

// 引入路由器
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false
new Vue({
    el : '#app',
    render : h => h(App),
    router: router,
})