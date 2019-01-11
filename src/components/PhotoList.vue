<template>
  <div>
    <h2>{{ this.$route.query.albumName }}</h2>
    <div class="wrapper">
      <md-card md-with-hover v-for="item in photo" :key="item.id">
        <md-ripple>
          <md-card-media>
            <img :src="item.url" @click="setUrl(item.url)" />
          </md-card-media>
        </md-ripple>
      </md-card>
    </div>
    <PhotoEnlarge v-bind:url="url"></PhotoEnlarge>
  </div>
</template>

<script>
import PhotoEnlarge from './PhotoEnlarge.vue'

export default {
  name: 'PhotoList',
  components: {
    PhotoEnlarge
  },
  data () {
    return {
      photo: [],
      url: ''
    }
  },
  methods: {
    setUrl (url) {
      this.url = url + `?${Math.random()}`
    }
  },
  mounted () {
    const axios = require('axios')
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${
          this.$route.query.albumId
        }`
      )
      .then(response => {
        this.photo = response.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 99vw;
  padding: 20px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}
.md-card {
  width: 200px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
