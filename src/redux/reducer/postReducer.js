import { FETCH_POST, CREATE_POST, FIND_POST_BY_ID } from "../actions/types"

const initialState = {
    data: [],
    foundData: null
}

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POST:
            return { ...state, data: [...payload] }
        case CREATE_POST:
            return { ...state }
        case FIND_POST_BY_ID: {
            console.log("payload", payload);
            return { ...state, foundData: payload }
        }

        default:
            return state
    }
}

export default postReducer
