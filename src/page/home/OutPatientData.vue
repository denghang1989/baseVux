<template>
  <div class="container">
    <div class="content">
      <flexbox :gutter="8" class="contentBox">
        <flexbox-item class="box" v-for="(item,index) in total" :key="index" @click.native="handleClick(item,index)">
          <div>
            <span class="title">{{item.title}}</span>
            <span class="title">{{item.subTitle}}</span>
          </div>
          <div>
            <span class="number">{{item.number}}</span>
            <span class="number">{{item.subNumber}}</span>
          </div>
        </flexbox-item>
      </flexbox>
      
      <flexbox class="contentBox">
        <flexbox-item style="padding: 4px 0;text-align: center;font-size: 14px" :span="1/3" v-for="(item,index) in numberData" :key="index">
          <span style="color: #B0B4B5">{{item.title}}</span> <span style="color: #7295CB">{{item.number}}</span>
        </flexbox-item>
      </flexbox>
      
      <flexbox orient="vertical" style="margin-top: 8px">
        <flexbox-item style="background-color: #ffffff ;border-radius: 4px;"><span style="margin-left: 16px">实时销售分布</span></flexbox-item>
        <flexbox-item style="background-color: #ffffff ;border-radius: 4px">
          <div class="radar" id="radar" style="min-height: 400px"></div>
        </flexbox-item>
      </flexbox>
      
      <x-table>
      
      </x-table>
    </div>
  </div>
</template>

<script>
  import Flexbox from "vux/src/components/flexbox/flexbox";
  import FlexboxItem from "vux/src/components/flexbox/flexbox-item";
  import XTable from "vux/src/components/x-table/index";
  
  export default {
    name: "OutPatientData",
    components: {XTable, FlexboxItem, Flexbox},
    data() {
      return {
        total: [
          {
            title: "月销售额",
            number: "10,000",
            subTitle: "年累计销售额",
            subNumber: "100,000"
          },
          {
            title: "月利润额",
            number: "50,000",
            subTitle: "年利润额",
            subNumber: "500,000"
          }
        ],
        
        numberData: [
          {title: "利润率", number: "50%"},
          {title: "客流量", number: "1000"},
          {title: "门店数", number: "300"},
        ],
        
        option: {
          title: {
            text: '基础雷达图'
          },
          tooltip: {},
          legend: {
            orient: 'vertical',
            left: 'right',
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              {name: '销售（sales）', max: 6500},
              {name: '管理（Administration）', max: 16000},
              {name: '信息技术（Information Techology）', max: 30000},
              {name: '客服（Customer Support）', max: 38000},
              {name: '研发（Development）', max: 52000},
              {name: '市场（Marketing）', max: 25000}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
            ]
          }]
        }
      }
    },
    
    methods: {
      handleClick(item, index) {
        console.log(""+index);
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: '' + index
        });
      },
      
      render() {
        let element = document.getElementById("radar");
        let eCharts = this.$echarts.init(element);
        eCharts.setOption(this.option);
      },
      
      getHttpData() {
        this.$http.get("").then(value => {
          this.render();
        }, error => {
        });
        this.render();
      }
    },
    
    mounted() {
      this.getHttpData();
    }
  }
</script>

<style scoped lang="less">
  .container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F8F5FC;
    
    .content {
      margin: 16px 8px;
      display: flex;
      flex-direction: column;
      
      .contentBox {
        background-color: #ffffff;
        border-radius: 4px;
        margin-top: 8px;
      }
      
      .box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        min-height: 60px;
        border-radius: 8px;
        
        div {
          width: 50%;
          height: 100%;
          min-height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        
        div:first-child {
          text-align: right;
        }
        
        .title {
          font-size: 12px;
        }
        
        .number {
          margin-left: 4px;
          font-size: 16px;
        }
      }
      
      .box:first-child {
        background-color: #5890ED;
      }
      
      .box:last-child {
        background-color: #F1B56D;
      }
    }
    
  }

</style>
