import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPosts from './pages/AppPosts.vue'
import SinglePost from './pages/SinglePost.vue'
import AddPost from './pages/AddPost.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts'},
  { path: '/posts', component: AppPosts, name:'all-posts' },
  { path: '/posts/:id', component: SinglePost, name:'single-post'},
  { path: '/add', component: AddPost, name:'add-post'},
  { path: '/edit/:id', component: AddPost, name:'edit-post'}

]
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
