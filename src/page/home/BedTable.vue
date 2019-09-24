<template>
  <div class="container">
    <x-table style="background-color:#fff;">
      <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Apple</td>
        <td>$1.25</td>
      </tr>
      <tr>
        <td>Banana</td>
        <td>$1.20</td>
      </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script>
  import XTable from "vux/src/components/x-table/index";
  
  export default {
    name: "BedTable",
    components: {XTable},
    data() {
      return {
        list: []
      }
    },
    methods: {
      getHttpData() {
        this.$http.get("").then(value => {
          if ((value.data===2000)&&(this.$lodash.isEmpty(value.data))) {
          
          }
        }, error => {
        
        })
      }
    },
    
    mounted() {
      this.getHttpData();
    }
  }
</script>

<style lang="less" scoped>
  .container {
    min-height: 100%;
    
  }
</style>
