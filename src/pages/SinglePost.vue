<template>
<div>
  <p>{{post.text}}</p>
  <div>
      <h1>comments</h1>
           <form  @submit.prevent="addComment" class="form-horizontal">
  <div class="form-group">
    <label for="text" class="control-label col-xs-4">Text</label> 
    <div class="col-xs-8">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-address-card"></i>
        </div> 
        <input v-model="newComment.text" id="text" name="text" type="text" class="form-control" required maxlength="250"> 
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-xs-offset-4 col-xs-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
    <div class="col-xs-offset-4 col-xs-8">
      <button name="reset" type="reset" class="btn btn-danger" >Reset</button>
    </div>
  </div>
</form>
  </div>
</div>
</template>

<script>
import {postService} from '../services/posts.js'
export default {
    data(){
        return{
            post:[],
            newComment:{  
                text: ''
            },
            /* postId: this.$route.params.id */
        }
    },
    created(){
        postService.get(this.$route.params.id).then((response) => {
        this.post = response.data})
    },
    methods:{
        addComment(newComment, postId){
            postService.addComment(this.newComment, this.$route.params.id)
        }
    }
}
</script>

<style>

</style>
