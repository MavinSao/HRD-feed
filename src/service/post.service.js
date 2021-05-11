import axios from "axios"

const API_URL = "http://110.74.194.124:9999/api/"
const fetchPosts = () => {
    return axios.get(API_URL + "posts")
}

export default {
    fetchPosts
}