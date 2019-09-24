<template>
  <div class="container">
    <div class="pie" id="pie"></div>
  </div>
</template>

<script>
  export default {
    name: "PieData",
    data() {
      return {
        option: {
          title: {
            text: '用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      }
    },
  
    methods: {
      getData() {
        this.$http.get("").then(value => {
            this.render();
        },error => {});
  
        this.render();
      },
      
      render(){
        let element = document.getElementById("pie");
        let echarts = this.$echarts.init(element);
        echarts.setOption(this.option);
      }
    },
    
    mounted() {
      this.getData();
    },
  }
</script>

<style scoped lang="less">
  .container{
    min-height: 100%;
    
    .pie{
      min-height: 400px;
    }
  }
</style>
