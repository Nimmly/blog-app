<template>
  <p>{{post.text}}</p>
</template>

<script>
import {postService} from '../services/posts.js'
export default {
    data(){
        return{
            post:[]
        }
    },
    created(){
        postService.get(this.$route.params.id).then((response) => {
        this.post = response.data})
    }
}
</script>

<style>

</style>
