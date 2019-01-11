<template>
  <div class="hello">
    <h2>{{this.$route.query.albumName}}</h2>
    
    <md-card md-with-hover v-for="item in photo" :key="item.id" >
       <md-ripple>
        <md-card-media>
          <img :src="item.url" @click="setUrl(item.url)">
        </md-card-media>
      </md-ripple>
    </md-card>
    <PhotoEnlarge v-bind:url="url" v-bind:show="showDialog"></PhotoEnlarge>
  </div>
</template>
  
<script>
import PhotoEnlarge from './PhotoEnlarge.vue';

export default {
  name: 'PhotoList',
  components: { 
    PhotoEnlarge 
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      photo: [],
      url: "",
    }
  },
  methods: {
    setUrl(url) {
      this.url = url;
    }
  },
  computed: {
    showDialog() {
      return !!this.url; 
    }
  },
  mounted () {
   const axios = require('axios');
   axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.$route.query.albumId}`).then((response) => {
      this.photo = response.data
      console.log(this.photo)
      console.log(">>>>", this.$route)
   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .md-card {
    width: 200px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
