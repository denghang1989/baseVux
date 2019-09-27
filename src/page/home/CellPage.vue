<template>
  <div class="container">
    <group>
      <cell v-for="(item,index) in menuList" :key="index" is-link :link="item.link">
          <img :src="item.icon" alt="" slot="icon" width="32px" height="32px">
          <span style="margin-left: 12px;font-size: 14px" slot="title">{{item.title}}</span>
      </cell>
    </group>
  </div>
</template>

<script>
  import {Group,Cell} from "vux";
  export default {
    name: "CellPage",
    components: {Group,Cell},
    data() {
      return {
        menuList: [
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory13.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory14.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory15.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory16.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory17.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory18.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory19.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory20.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory21.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory22.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory23.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory24.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory25.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory26.png"), title: "银行CEO面板", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory27.png"), title: "银行CEO面板", link: ""},
        ]
      }
    },
  }
</script>

<style scoped>
  .container {
    min-height: 100%;
    background-color: #F8F5FC;
  }
</style>
