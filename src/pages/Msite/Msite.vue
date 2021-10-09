<template>
    <div class="msite">
        <!-- 引入头部组件 -->
        <HeaderTop title="广州工商学院（三水校区）">
            <span class="header-search ss" slot="left">
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span class="header-login denglu" slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <Navigation></Navigation>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>

        </div>
    </div>
</template>

<script>
    // 引入头部组件
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    // 引入导航组件
    import Navigation from '../../components/Navigation/Navigation.vue'
    // 引入附件商家组件
    import ShopList from '../../components/ShopList/ShopList.vue'
    
    export default {
      name : "MSite",
      components:{
        HeaderTop,
        ShopList,
        Navigation,
      }
    }
</script>

<style>
.msite {
  width: 100%;
}
.msite .msite_header .header_login .header_login_text {
  color: #fff;
}
.ss{
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
}
.denglu{
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
}

.msite .header_title_text{
    font-size: 20px;
    color: #fff;
    display: block;
    margin-top: 12px;    
    text-align: center; 
}
.msite .msite_nav {
  position: relative;
  margin-top: 45px;
  height: 200px;
  background: #fff;
}
.msite .msite_nav::before {
  content: '';
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  transform: scaleY(0.5);
}

.msite .msite_shop_list {
  position: relative;
  margin-top: 10px;
  background: #fff;
}
.msite .msite_shop_list::before {
  content: '';
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
.msite .msite_shop_list .shop_header {
  padding: 10px 10px 0;
}
.msite .msite_shop_list .shop_header .shop_icon {
  margin-left: 5px;
  color: #999;
}
.msite .msite_shop_list .shop_header .shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

</style>