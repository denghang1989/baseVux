<template>
  <div class="container">
    
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <x-img :src="item"></x-img>
      </swiper-item>
    </swiper>
    
    <grid :cols="4">
      <grid-item v-for="(item,index) in menuList" :icon="item.icon" :label="item.label" :key="index" :link="item.link"></grid-item>
    </grid>
  
  </div>
</template>

<script>
  import {Swiper, SwiperItem, Grid} from "vux";
  import XImg from "vux/src/components/x-img/index";
  import GridItem from "vux/src/components/grid/grid-item";
  
  export default {
    name: "MenuPage",
    components: {GridItem, XImg, Grid, SwiperItem, Swiper},
    data() {
      return {
        banner:
          ["http://cdn.read.html5.qq.com/image?imageUrl=http%3A%2F%2Finews%2Egtimg%2Ecom%2Fnewsapp%5Fmatch%2F0%2F10371554856%2F0&src=read&t=0&r=17&rspimgflag=0&imgflag=15&filesize=301624&referUrl=http%3A%2F%2Fkuaibao%2Eqq%2Ecom%2Fs%2F20190924A08J5I00",
            "http://cdn.read.html5.qq.com/image?imageUrl=http%3A%2F%2Finews%2Egtimg%2Ecom%2Fnewsapp%5Fmatch%2F0%2F10371554857%2F0&src=read&t=0&r=17&rspimgflag=0&imgflag=15&filesize=191551&referUrl=http%3A%2F%2Fkuaibao%2Eqq%2Ecom%2Fs%2F20190924A08J5I00",
            "http://cdn.read.html5.qq.com/image?imageUrl=http%3A%2F%2Finews%2Egtimg%2Ecom%2Fnewsapp%5Fmatch%2F0%2F8968522788%2F0&src=read&t=0&r=17&rspimgflag=0&imgflag=15&filesize=80310&referUrl=http%3A%2F%2Fkuaibao%2Eqq%2Ecom%2Fs%2F20190924A08J5I00"
          ],
        menuList:
          [
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory1.png"), label: "企业管理", link: "/CellPage"},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory2.png"), label: "中层管理人员", link: "/ButtonGroup"},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory3.png"), label: "业务分析人员", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory4.png"), label: "行业化", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory5.png"), label: "财务主题", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory6.png"), label: "市场主题", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory7.png"), label: "人力资源主题", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory8.png"), label: "销售主题", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory9.png"), label: "报表展示", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory10.png"), label: "参数查询", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory11.png"), label: "填报采集", link: ""},
            {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory12.png"), label: "图表展示", link: ""}
          ]
      }
    },
  }
</script>

<style scoped lang="less">
  .container {
    min-height: 100%;
    background-color: #F8F5FC;
  }
</style>
