<template>
  <div class="bed">
    <img class="back" src="../../assets/node_modules_reactnavigation_src_views_assets_backicon.png" alt="">
    <main class="main">
      <x-table>
      
      </x-table>
    </main>
  </div>
</template>

<script>
  import XTable from "vux/src/components/x-table/index";
  
  export default {
    name: "BedData",
    components: {XTable},
    methods: {
      getBedData() {
        this.$http.get("").then(value => {
          this.bedData = value
        });
      }
    },
    
    mounted() {
      this.getBedData();
    },
    
    data() {
      return {
        bedData: {}
      }
    },
  }
</script>

<style scoped lang="less">
  .bed {
    padding: 0;
    margin: 0;
    min-height: 100%;
    
    .back {
      margin-top: 16px;
      margin-left: 16px;
    }
    
    .main{
      min-height: 100%;
    }
  }
</style>
