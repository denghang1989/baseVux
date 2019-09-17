<template>
  <div class="home">
    <div class="header-box">
      <header class="home-header">
        <x-header title="你好"></x-header>
      </header>
    </div>
    
    <div class="box" v-for="(index,item) in list" v-bind:key="index">
      <Card>
        <div slot="header" class="card-header">
          <div class="male" v-if="index%2===0">
            <font-awesome-icon icon="male" size="2x"></font-awesome-icon>
          </div>
          <div class="female" v-else>
            <font-awesome-icon icon="female" size="2x"></font-awesome-icon>
          </div>
          <span>{{item}}</span>
        </div>
        <div slot="content" class="card-padding">
          <font-awesome-icon icon="clock" style="color: lightblue"></font-awesome-icon>
          <p>hehe</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  
  import {Card, XHeader} from "vux"
  
  export default {
    name: "HomePage",
    components: {XHeader, Card},
    data() {
      return {
        header: "这是一个Card",
        list: [1, 2, 3, 4, 5, 6, 7, 9, 10],
      }
    },
  }
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
  
  .card-padding {
    padding: 15px;
  }
  
  .home-header {
    height: 46px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 500;
  }
  
  .header-box {
    min-height: 46px;
  }
  
  .box {
    padding: 2px 8px;
    border-radius: 5px;
  }
  
  .card-header {
    padding: 8px 8px 2px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  
  .card-header:after {
    border-bottom: 1px solid #E5E5E5;
  }

</style>
