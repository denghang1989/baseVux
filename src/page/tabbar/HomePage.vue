<template>
  <div class="home">
    <div class="header-box">
      <header class="home-header">
        <x-header title="你好"></x-header>
      </header>
    </div>
    
    <main class="main">
      <Grid :cols="3">
        <grid-item v-for="(item,index) in list" :key="index" :icon="item.icon" :label="item.title" :link="item.link">
        </grid-item>
      </Grid>
    </main>
  
  </div>
</template>

<script>
  
  import {Card, XHeader, Grid, GridItem} from "vux"
  
  export default {
    name: "HomePage",
    components: {GridItem, Grid, XHeader, Card},
    data() {
      return {
        header: "这是一个Card",
        list: [
          {icon: "square", title: "护士执行", link: ""},
          {icon: "square", title: "护士执行", link: ""},
          {icon: "square", title: "护士执行", link: ""},
          {icon: "square", title: "护士执行", link: ""},
          {icon: "square", title: "护士执行", link: ""},
          {icon: "square", title: "护士执行", link: ""},
          {icon: "square", title: "护士执行", link: ""}
        ]
      }
    },
    
    methods: {
      getList(useId) {
        this.$http.get()
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
  
  .main {
    flex-grow: 1;
  }

</style>
