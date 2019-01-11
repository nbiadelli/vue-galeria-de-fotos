<template>
  <div>
    <md-dialog :md-active.sync="show">
      <img :src="url" >
    </md-dialog>
  </div>
</template>

<script>

export default {
  name: 'PhotoEnlarge',
  props:{
    url: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>
