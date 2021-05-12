import { FETCH_POST, CREATE_POST } from "../actions/types"

const initialState = {
    data: []
}

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_POST:
            return { ...state, data: [...payload] }
        case CREATE_POST:
            return { ...state }
        default:
            return state
    }
}

export default postReducer
