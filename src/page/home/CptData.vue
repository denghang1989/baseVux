<template>
  <div class="container">
    <div id="cpt" class="canvas"></div>
  </div>
</template>

<script>
  export default {
    name: "CptData",
    data() {
      return {
        option: {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        }
      }
    },
    
    methods: {
      getData() {
        this.$http.get("").then(value => {
          this.render(value);
        }, error => {
        
        })
      },
      
      render(data) {
        let element = document.getElementById("cpt");
        let echarts = this.$echarts.init(element);
        echarts.setOption(this.option);
      }
      
    },
    
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped lang="less">
  .container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    
    .header {
      height: 45px;
    }
    
    .canvas {
      margin: 0 8px;
      height: 400px;
    }
  }
</style>
