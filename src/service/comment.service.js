import axios from "axios"
import authHeader from "./auth-header"
const API_URL = "http://110.74.194.124:9999/api/"

const getCommentByPostID = (id) => {
    return axios.get(API_URL + `posts/${id}/comments`)
}

const postComment = (content, id) => {
    console.log("Content", content, id);
    return axios.post(API_URL + `comments`, { content, id }, { headers: authHeader() })
}

export default {
    getCommentByPostID,
    postComment
}