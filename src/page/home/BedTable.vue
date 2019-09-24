<template>
  <div class="container">
    <x-table>
    
    </x-table>
  </div>
</template>

<script>
  import XTable from "vux/src/components/x-table/index";
  export default {
    name: "BedTable",
    components: {XTable},
    methods: {
      getHttpData() {
      
      }
    },
    
    mounted() {
    
    }
  }
</script>

<style lang="less" scoped>
  .container {
    min-height: 100%;
    
  }
</style>
