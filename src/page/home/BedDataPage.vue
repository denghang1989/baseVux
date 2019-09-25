<template>
  <div class="container">
    <div class="content">
      <header class="header">
        {{getCurrentTime}}
      </header>
      
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item v-for="(item,index) in list" :key="index" :span="1/3" class="box">
          <span>{{item.title}}</span>
          <span>{{item.text}}</span>
        </flexbox-item>
      </flexbox>
      
      <x-table style="margin-top: 8px">
        <thead style="background-color: #667DED;color: #ffffff;font-size: 14px">
        <tr>
          <th rowspan="2">城市</th>
          <th colspan="3">年度目标利润</th>
          <th colspan="2">实际签约利润</th>
        </tr>
        <tr>
          <th>签约金额</th>
          <th>净利润</th>
          <th>签约金额</th>
          <th>净利润</th>
          <th>净利率</th>
        </tr>
        </thead>
        <tbody class="tbody">
        <tr v-for="(item,index) in tableData" :key="index">
          <td v-for="(subItem,subIndex)  in item" :key="subIndex">{{subItem}}</td>
        </tr>
        </tbody>
      </x-table>
      
      <div class="line" id="line"></div>
      
    </div>
  </div>
</template>

<script>
  import {nowTime} from '../../utils/DateUtils';
  import Flexbox from "vux/src/components/flexbox/flexbox";
  import FlexboxItem from "vux/src/components/flexbox/flexbox-item";
  import XTable from "vux/src/components/x-table/index";
  
  export default {
    name: "BedDataPage",
    components: {XTable, FlexboxItem, Flexbox},
    data() {
      return {
        currentTime: "",
        list: [
          {
            title: "签约额(亿元)",
            text: "21.6",
          },
          {
            title: "净利率(亿元)",
            text: "4.49",
          },
          {
            title: "净利率%",
            text: "20.77%",
          }
        ],
        tableData: [
          ["城市2", "3.94", "13.62%", "0.19", "0.16", "84.2%"],
          ["城市8", "2.60", "46.62", "3.49", "1.84", "25.8%"],
          ["城市2", "3.94", "13.62%", "0.19", "0.16", "84.2%"],
          ["城市8", "2.60", "46.62", "3.49", "1.84", "25.8%"],
          ["城市2", "3.94", "13.62%", "0.19", "0.16", "84.2%"],
          ["城市8", "2.60", "46.62", "3.49", "1.84", "25.8%"],
          ["城市2", "3.94", "13.62%", "0.19", "0.16", "84.2%"],
          ["城市8", "2.60", "46.62", "3.49", "1.84", "25.8%"]
        ],
        option: {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: {},
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
        }
      }
    },
    
    computed: {
      getCurrentTime() {
        let time = nowTime();
        return `数据更新与${time}`;
      }
    },
    
    methods: {
      getHttpData() {
        this.$http.get("").then(value => {
          if ((value.status === 200) && (Array.isArray(value.data))) {
            this.render(value.data);
          }
        }, error => {
        
        });
        this.render(this.option);
      },
      
      getTableData() {
        this.$http.get("").then(value => {
          if ((value.status === 200) && (Array.isArray(value.data))) {
            this.tableData = value.data;
          }
        }, error => {
        
        })
      },
      
      getListData(){
        this.$http.get("").then(value => {
          if ((value.status === 200) && (Array.isArray(value.data))) {
            this.list = value.data;
          }
        },error => {
        
        })
      },
      
      render(data) {
        let element = document.getElementById("line");
        let eCharts = this.$echarts.init(element);
        eCharts.setOption(this.option);
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
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
    
    .content {
      margin: 16px 8px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      
      .header {
        color: #4D545A;
        font-size: 12px;
        text-align: center;
        padding: 8px 0 3px 0;
      }
      
      .box {
        padding: 4px 0;
        color: #ffffff;
        background-color: #3FA5F0;
        text-align: center;
        display: flex;
        flex-direction: column;
        
        span:first-child {
          font-size: 16px;
        }
        
        span:last-child {
          margin-top: 12px;
          font-size: 16px;
        }
      }
      
      .box:nth-child(even) {
        background-color: #667EEC;
      }
      
      .tbody {
        color: #A3A3A3;
        font-size: 14px;
      }
      
      .tbody tr:nth-child(2n) {
        background-color: #F4F3F9;
      }
      
      .line {
        min-height: 400px;
      }
    }
    
  }
</style>
