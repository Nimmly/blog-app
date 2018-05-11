<template>
  <div class="container">
    <div v-for="(post, key) in posts" :key="key"> 
        <router-link class="nav-link " :to="{ name: 'single-post', params: { id: post.id }}">{{ post.title }}</router-link>
    </div>

</div>
</template>

<script>
import SinglePost from '../pages/SinglePost.vue'
import {postService} from '../services/posts.js'
export default {
    components:{
        SinglePost
    },
    data(){
        return {
            posts: []    
        }
    },
    created(){
      postService.getAll().then((response) => {
        this.posts = response.data
        
  })
    },

}
</script>

<style>

</style>
