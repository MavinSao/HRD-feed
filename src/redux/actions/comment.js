import commentService from "../../service/comment.service"
import { FIND_COMMENT_BY_POST_ID, FIND_COMMENT_FAIL } from "./types"


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
