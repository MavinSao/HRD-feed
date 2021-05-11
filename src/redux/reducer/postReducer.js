import { FETCH_POST } from "../actions/types"

const initialState = {
    data: []
}

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_POST:
            return { ...state, data: [...payload] }

        default:
            return state
    }
}

export default postReducer
