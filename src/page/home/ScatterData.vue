<template>
  <div class="container">
    <div class="scatter" id="render"></div>
  </div>
</template>

<script>
  export default {
    name: "ScatterData",
    data() {
      return {
        option: {
          title:{
            text: '用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
          },
          xAxis: {},
          yAxis: {},
          series: [{
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68]
            ],
            type: 'scatter'
          }]
        }
      }
    },
  
    methods: {
      getHtpData() {
        this.$http.get("").then(value => {
          this.render();
        },error => {})
      },
      
      render(data){
        let element = document.getElementById("render");
        let echarts = this.$echarts.init(element);
        echarts.setOption(this.option);
      }
    },
    
    mounted() {
      this.getHtpData();
    }
  }
</script>

<style scoped lang="less">
  .container {
    min-height: 100%;
    
    .scatter {
      min-height: 400px;
    }
  }
</style>
