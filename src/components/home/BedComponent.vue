<template>
  <div class="bed">
    <x-table :cell-bordered="false">
      <thead>
      <tr>
        <th colspan="2">住院实时监控</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in list" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.value}}</td>
      </tr>
      </tbody>
    </x-table>
    <canvas id="bed"></canvas>
  </div>
</template>

<script>
  import {XTable} from 'vux'
  
  export default {
    name: "BedComponent",
    components: {XTable},
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.$http.get("/api/wardBed/info").then(({data}) => {
        this.list = data;
        this.canvasBed(data)
      })
    },
    methods: {
      canvasBed() {
      
      }
    },
  }
</script>

<style scoped lang="less">
  .bed {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    
    th {
      background: #F7F7FA;
      text-align: left;
      padding-left: 20px;
    }
    
    tr:last-child {
      background: #F7F7FA;
    }
  }
</style>
