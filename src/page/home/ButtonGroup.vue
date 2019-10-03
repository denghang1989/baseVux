<template>
  <div class="container">
    <button-tab v-model="selectedIndex" style="margin: 8px 16px 0 16px">
      <button-tab-item @on-item-click="onItemClick">上周</button-tab-item>
      <button-tab-item @on-item-click="onItemClick">本周</button-tab-item>
      <button-tab-item @on-item-click="onItemClick">下周</button-tab-item>
    </button-tab>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import ButtonTab from "vux/src/components/button-tab/button-tab";
  import ButtonTabItem from "vux/src/components/button-tab/button-tab-item";
  
  export default {
    name: "ButtonGroup",
    components: {ButtonTabItem, ButtonTab},
    data() {
      return {
        selectedIndex: 0
      }
    },
    methods: {
      onItemClick() {
        let path="";
        switch (this.selectedIndex) {
          case 0:
            path="/ButtonGroup/OnePage";
            break;
          case 1:
            path="/ButtonGroup/TwoPage";
            break;
          case 2:
            path="/ButtonGroup/ThreePage";
            break;
        }
        this.$router.push(path);
      }
    },
  }
</script>

<style lang="less" scoped>
  .container {
    min-height: 100%;
    
    .content {
      min-height: 100%;
      margin: 8px 8px;
    }
  }
</style>
