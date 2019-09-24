<template>
  <div class="home">
    <div class="header-box">
      <header class="home-header">
        <x-header title="你好"></x-header>
      </header>
    </div>
    
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
    
    <main class="main">
      <Grid :cols="4">
        <grid-item v-for="(item,index) in list" :key="index" :icon="item.icon" :label="item.title" :link="item.link">
        </grid-item>
      </Grid>
    </main>
  
  </div>
</template>

<script>
  
  import {Card, XHeader, Grid, GridItem, Swiper, SwiperItem} from "vux"
  
  export default {
    name: "HomePage",
    components: {SwiperItem, Swiper, GridItem, Grid, XHeader, Card},
    data() {
      return {
        header: "这是一个Card",
        list: [
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_bi.png"), title: "企业高管", link: "/BedData"},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_cpt.png"), title: "中层管理", link: "/CptData"},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory1.png"), title: "业务分析", link: "/PieData"},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory2.png"), title: "财务主题", link: "/ScatterData"},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory8.png"), title: "市场主题", link: "/GaugeData"},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory3.png"), title: "人力资源", link: ""},
          {icon: require("../../assets/public_base_assets_icons_fs_gradient_directory9.png"), title: "报表展示", link: ""}
        ],
        banner: [
          require("../../assets/public_platform_view_guide_image_pad_english_guideview01.png"),
          require("../../assets/public_platform_view_guide_image_pad_english_guideview02.png")
        ]
      }
    },
    
    methods: {
      getList(useId) {
        this.$http.post("", {useId: useId}).then(value => {
          if ((value.data === 200) && (Array.isArray(value.data))) {
            this.list = value.data;
          }
        }, error => {
        
        })
      },
      
      getBanner() {
        this.$http.get("").then(value => {
          if ((value.status === 200) && (Array.isArray(value.data))) {
            this.banner = value.data;
          }
        }, error => {
        
        })
      }
    },
    
    mounted() {
      this.getList("");
      this.getBanner();
    }
  }
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
  
  .home-header {
    height: 46px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 500;
  }
  
  .header-box {
    min-height: 46px;
  }
  
  .main {
    flex-grow: 1;
  }

</style>
