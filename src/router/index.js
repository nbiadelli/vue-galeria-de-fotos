import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PhotoAlbums from '@/components/PhotoAlbums'
import PhotoList from '@/components/PhotoList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PhotoAlbums',
      component: PhotoAlbums
    },
    {
      path: '/PhotoList',
      name: 'PhotoList',
      component: PhotoList
    }
  ]
})
