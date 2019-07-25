<template>
  <div class="home">
    <bed-component></bed-component>
  </div>
</template>

<script>
  import BedComponent from "../../components/home/BedComponent";
  
  export default {
    name: "HomePage",
    components: {BedComponent}
  }
</script>

<style scoped lang="less">
  .home {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
