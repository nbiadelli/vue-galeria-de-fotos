import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PhotoAlbums from '@/components/PhotoAlbums'
import Photolist from '@/components/Photolist'
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
      component: Photolist
    }
  ]
})
