<template>
  <div class="container">
    <div v-for="(post, key) in posts" :key="key"> 
        <h2>{{ post.title }}</h2>
        <p>{{ post.text }}</p>
    </div>
</div>
</template>

<script>
import {postService} from '../services/posts.js'
export default {
    data(){
        return {
            posts: []    
        }
    },
    created(){
      postService.getAll().then((response) => {
        this.posts = response.data
  })
    }

}
</script>

<style>

</style>
