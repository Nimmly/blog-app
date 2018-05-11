<template>


    <form  @submit.prevent="addPost" class="form-horizontal">
  <div class="form-group">
    <label for="title" class="control-label col-xs-4">Title</label> 
    <div class="col-xs-8">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-address-card"></i>
        </div> 
        <input v-model="newPost.title" id="title" name="title" type="text" class="form-control" required minlength="2"> 
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="text" class="control-label col-xs-4">Text</label> 
    <div class="col-xs-8">
      <input v-model="newPost.text" id="text" name="text" type="text" class="form-control" required maxlength="300">
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
</template>

<script>
import { postService } from '../services/posts'
export default {
    data(){
        return{
            newPost:{
                title: '',
                text: ''
            }
        }
    },
    methods:{
        addPost(newPost){
            postService.add(this.newPost)
            this.$router.push('/posts')
        },
        reset(){
            this.newPost={}
        }
    }

}
</script>

<style>

</style>
