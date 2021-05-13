import commentService from "../../service/comment.service"
import { FIND_COMMENT_BY_POST_ID, FIND_COMMENT_FAIL, POST_COMMENT } from "./types"


export const findCommentByPostId = (id) => (dp) => {
    return commentService.getCommentByPostID(id)
        .then((response) => {
            if (response.data.success) {
                dp({
                    type: FIND_COMMENT_BY_POST_ID,
                    payload: response.data.payload
                })
            } else {
                dp({
                    type: FIND_COMMENT_FAIL,
                })
            }
            return Promise.resolve()
        })
        .catch((e) => {
            return Promise.reject()
        })
}

export const postComment = (content, id) => (dp) => {
    return commentService.postComment(content, id)
        .then((response) => {
            dp({
                type: POST_COMMENT,
                payload: response.data.payload
            })
            return Promise.resolve()
        }).catch(err => {
            console.log(err);
        })
}