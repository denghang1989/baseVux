<template>
  <div class="patient">
    <card v-on:click="onClick">
      <div slot="header" >
        <font-awesome-icon icon="clock"></font-awesome-icon>
        <span class="title"></span>
      </div>
      <div slot="content">
      </div>
    </card>
  </div>
</template>

<script>
  import card from "vux/src/components/card/index";
  
  export default {
    name: "Patient",
    components: {card},
    data() {
      return {
        patient: {}
      }
    },
    
    props: {
      patient: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    
    computed: {
      changeName() {
        return this.data;
      }
    },
    
    methods: {
      onClick() {
      
      }
    },
    
    mounted() {
    
    },
    
    created() {
    
    }
  }
</script>

<style scoped>

</style>
