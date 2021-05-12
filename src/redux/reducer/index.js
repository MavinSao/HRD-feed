import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer"
import commentReducer from "./commentReducer"

const rootReducer = combineReducers({
    postReducer,
    authReducer,
    commentReducer
});

export default rootReducer;