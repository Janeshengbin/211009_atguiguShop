<template>
    <div class="search">
        <!-- 引入头部组件 -->
        <HeaderTop title="搜索"></HeaderTop>
        <form class="search_form" action="#">
          <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
          <input type="submit" name="submit" class="search_submit">
        </form>
      </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
        name : 'Search',
        components : {HeaderTop,}
    }
</script>

<style>
.search {
    width: 100%
}
.search .header_title_text{
    font-size: 20px;
    color: #fff;
    display: block;
    margin-top: 12px;
    text-align: center;
}
.search .search_form {
    *zoom: 1;
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;
}
.search .search_form::after {
    content: '';
    display: block;
    clear: both;
}
.search .search_form input {
    height: 35px;
    padding: 0 4px;
    border-radius: 2px;
    font-weight: bold;
    outline: none;
}
.search .search_form input.search_input {
    float: left;
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
}
.search .search_form input.search_submit {
    float: right;
    width: 18%;
    border: 4px solid #02a774;
    font-size: 16px;
    color: #fff;
    background-color: #02a774;
}
.header_title {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
</style>