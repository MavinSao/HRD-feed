import axios from "axios"
import authHeader from "./auth-header"
const API_URL = "http://110.74.194.124:9999/api/"

const fetchPosts = () => {
    return axios.get(API_URL + "posts")
}

const postData = (caption, image) => {
    return axios.post(API_URL + "posts/create", { caption, image }, { headers: authHeader() })
}

export default {
    fetchPosts,
    postData
}