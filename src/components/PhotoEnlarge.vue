<template>
  <div>
    <md-dialog :md-active.sync="showDialog" :md-close-on-esc="true">
      <img :src="url" />
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'PhotoEnlarge',
  data () {
    return {
      showDialog: false
    }
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  watch: {
    url: function (newVal, oldVal) {
      this.showDialog = true
    }
  }
}
</script>

<style scoped>
.md-dialog {
  max-width: 768px;
}
</style>
