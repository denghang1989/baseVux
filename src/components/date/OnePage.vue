<template>
  <div class="container">
    <card :header="{title:desc}">
      <div id="box" slot="content" class="box">
      
      </div>
    </card>
  </div>
</template>

<script>
  import Card from "vux/src/components/card/index";
  
  let eCharts="";
  
  export default {
    name: "OnePage",
    components: {Card},
    data() {
      return {
        desc: "上周收入",
        option:{
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
        },error => {
        
        });
        this.render();
      },
      
      render(){
        let element = document.getElementById("box");
        eCharts = this.$echarts.init(element);
        eCharts.setOption(this.option)
      }
    },
    
    mounted() {
      this.getHttpData();
      
      setInterval(function () {
        this.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        eCharts.setOption(option, true);
      },2000)
    }
  }
</script>

<style scoped lang="less">
  .container{
    min-height: 100%;
    
    .box{
      min-height: 300px;
    }
  }
</style>
