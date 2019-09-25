<template>
  <div class="container">
    <div class="content">
      <flexbox :gutter="8">
        <flexbox-item class="box">
        
        </flexbox-item>
        <flexbox-item class="box">
        
        </flexbox-item>
      </flexbox>
      
      <flexbox style="margin-top: 8px">
        <flexbox-item :span="1/3"></flexbox-item>
        <flexbox-item :span="1/3"></flexbox-item>
        <flexbox-item :span="1/3"></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import Flexbox from "vux/src/components/flexbox/flexbox";
  import FlexboxItem from "vux/src/components/flexbox/flexbox-item";
  export default {
    name: "OutPatientData",
    components: {FlexboxItem, Flexbox}
  }
</script>

<style scoped lang="less">
  .container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
    
    .content{
      margin: 16px 8px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      
      .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffffff;
        min-height: 50px;
        border-radius: 8px;
      }
      
      .box:first-child{
        background-color: #5890ED;
      }
      
      .box:last-child{
        background-color: #F1B56D;
      }
    }

  }

</style>
