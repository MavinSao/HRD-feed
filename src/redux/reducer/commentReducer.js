import { FIND_COMMENT_BY_POST_ID, FIND_COMMENT_FAIL } from "../actions/types"

const initialState = {
    comments: []
}

const commentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FIND_COMMENT_BY_POST_ID:
            return { ...state, comments: [...payload] }
        case FIND_COMMENT_FAIL:
            return { ...state, comments: [] }
        default:
            return state
    }
}

export default commentReducer