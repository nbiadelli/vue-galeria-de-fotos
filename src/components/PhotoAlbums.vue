<template>
  <div class="wrapper">
    <div v-for="item in list" :key="item.id">
      <a
        v-bind:href="
          '#/PhotoList/?albumId=' + item.id + '&albumName=' + item.title
        "
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <img src="../assets/foto.png" alt="" />
              <p>{{ item.title }}</p>
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
      list: []
    }
  },
  mounted () {
    const axios = require('axios')
    axios.get('https://jsonplaceholder.typicode.com/albums').then(response => {
      this.list = response.data
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
  height: 220px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

p {
  font-size: 13px;
  color: #0000008f;
  font-weight: 600;
  margin-top: 2px;
}
</style>
