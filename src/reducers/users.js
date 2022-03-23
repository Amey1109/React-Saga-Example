import {actions} from "../actions/index"
const initialState = {
    users : [],
    loading:false,
    error:null
}

export const userReducer = (state=initialState,action) =>{
    switch (action.type) {
        case actions.USER_REQUEST :
            return {
                ...state,
                loading:true
            }
        case actions.USER_SUCCESS:
            return {
                ...state,
                users:action.users,
                loading:false
            }
        case actions.USER_ERROR:
            return {
                ...state,
                error:action.error
            }
        default:
            return state;
    }

}
