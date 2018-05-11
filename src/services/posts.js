import Axios from "axios"

export default class PostsService{
    constructor(){
        Axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
        getAll(){
            return Axios.get('posts') 
    }
    
}

export const postService = new PostsService()