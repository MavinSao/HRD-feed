import axios from "axios"
import authHeader from "./auth-header"
const API_URL = "http://110.74.194.124:9999/api/posts/"

const getCommentByPostID = (id) => {
    return axios.get(API_URL + `${id}/comments`)
}

export default {
    getCommentByPostID
}