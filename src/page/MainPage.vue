<template>
  <div class="main">
    <div class="content">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <tabbar>
        <tabbar-item selected link="/main/home">
          <img slot="icon" src="../assets/tabbar/public_base_assets_icons_fs_gradient_directory26.png">
          <span slot="label">综合运营</span>
        </tabbar-item>
        <tabbar-item link="/main/cockpit">
          <img slot="icon" src="../assets/tabbar/public_base_assets_icons_fs_gradient_directory27.png">
          <span slot="label">驾驶舱</span>
        </tabbar-item>
        <tabbar-item link="/main/board">
          <img slot="icon" src="../assets/tabbar/public_base_assets_icons_fs_gradient_directory28.png">
          <span slot="label">仪表盘</span>
        </tabbar-item>
        <tabbar-item link="/main/panel">
          <img slot="icon" src="../assets/tabbar/public_base_assets_icons_fs_gradient_directory21.png">
          <span slot="label">经营看板</span>
        </tabbar-item>
      </tabbar>
    </footer>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'
  
  export default {
    name: "MainPage",
    components: {
      Tabbar,
      TabbarItem
    },
    mounted() {
      this.$router.push("/main/home")
    }
  }
</script>

<style scoped lang="less">
  .main {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    
    .content {
      width: 100%;
      flex-grow: 1;
    }
    
    .footer {
      min-height: 56px;
    }
  }
</style>
