import PostService from '../../service/post.service'
import { FETCH_POST } from './types'
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