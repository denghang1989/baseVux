<template>
  <div class="container">
    <div class="gauge" id="gauge"></div>
  </div>
</template>

<script>
  export default {
    name: "GaugeData",
    data() {
      return {
        option: {
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter:'{value}%'},
              data: [{value: 50, name: '完成率'}]
            }
          ]
        }
      }
    },
    
    methods: {
      getHttpData() {
        this.$http.get("").then(value => {
          this.render();
        },error => {});
  
        this.render();
      },
      
      render() {
        let element = document.getElementById("gauge");
        let echarts = this.$echarts.init(element);
        echarts.setOption(this.option);
      }
    },
    
    mounted() {
      this.getHttpData();
    }
  }
</script>

<style scoped lang="less">
  .container{
    min-height: 100%;
    
    .gauge{
      min-height: 400px;
    }
  }
</style>
