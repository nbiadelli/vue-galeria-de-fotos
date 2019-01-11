<template>
<div class="wrapper">
  <div v-for="item in list" :key="item.id">
    <a v-bind:href="'#/PhotoList/?albumId=' + item.id + '&albumName=' + item.title">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-content>
            <i class="material-icons">camera_alt</i>
            <p>{{item.title}}</p>
          </md-card-content>
        </md-ripple>
      </md-card>
    </a> 
  </div>
</div>

</template>

<script>
export default {
  name: 'PhotoAlbums',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  mounted () {
   const axios = require('axios');
   axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
     this.list = response.data
  //  console.log(this.list)
   })
  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
      /* width: 100vw; */
    /* background: red; */
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );;
    grid-gap: 10px;
}

  .md-card {
    width: 200px;
    height: 200px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
