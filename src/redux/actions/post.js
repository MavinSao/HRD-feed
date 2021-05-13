import PostService from '../../service/post.service'
import { CREATE_POST, FETCH_POST, FIND_POST_BY_ID } from './types'
export const fetchPosts = () => {
    return (dp) => {
        PostService.fetchPosts().then((response) => {
            dp({
                type: FETCH_POST,
                payload: response.data.payload
            })
        })
    }
}

export const postData = (caption, image) => (dp) => {
    return PostService.postData(caption, image)
        .then(() => {
            dp({
                type: CREATE_POST
            })
            return Promise.resolve()
        })
        .catch((err) => {
            console.log(err);
            return Promise.reject()
        })
}
export const findPostID = (id) => (dp) => {
    return PostService.findPostByID(id)
        .then((response) => {
            dp({
                type: FIND_POST_BY_ID,
                payload: response.data.payload
            })
        })
}