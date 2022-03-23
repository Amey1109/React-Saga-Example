import { combineReducers } from "redux";
import { userReducer } from "./users";
const reducer = combineReducers({
    users:userReducer
})

export default reducer