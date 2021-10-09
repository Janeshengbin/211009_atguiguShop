<template>
    <div id="app">
        <router-view></router-view>
        <!--v-show="$route.meta.showFooter" 表示当前路由有做个属性就隐藏  -->
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
        name : 'App',
        components : {
            FooterGuide,
        }
    }
</script>

<style>
#app{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: relative;
}
</style>