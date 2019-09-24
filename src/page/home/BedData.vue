<template>
  <div class="bed">
    <main class="main">
      <bed-table></bed-table>
      <div id="line" class="line"></div>
    </main>
  </div>
</template>

<script>
  import XTable from "vux/src/components/x-table/index";
  import BedTable from "./BedTable";
  
  export default {
    name: "BedData",
    components: {BedTable, XTable},
    methods: {
      getBedData() {
        setTimeout(()=>{
          let echart = this.$echarts.init(document.getElementById("line"));
          echart.setOption(this.option);
        },2000);
      }
    },
    
    mounted() {
      this.getBedData();
    },
    
    data() {
      return {
        bedData: {},
        option: {
          title: {
            text: 'ECharts demo'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .bed {
    padding: 0;
    margin: 5px 0;
    min-height: 100%;
    
    .back {
      margin-top: 16px;
      margin-left: 16px;
    }
    
    .main {
      min-height: 100%;
    }
    
    .line {
      margin-top: 10px;
      height: 400px;
    }
  }
</style>
