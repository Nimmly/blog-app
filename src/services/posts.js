import Axios from "axios"

export default class PostsService{
    constructor(){
        Axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
        getAll(){
            return Axios.get('posts') 
    }
        get(id){
            return Axios.get(`posts/${id}`)
        }
        add(post){
            return Axios.post('posts', post)
        }
        delete(id){
            return Axios.delete(`posts/${id}`)
        }
    
}

export const postService = new PostsService()