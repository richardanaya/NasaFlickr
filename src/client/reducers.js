import {SHOW_SECRET} from "./actions"

export default function(state = {
    message:""
}, action) {
    switch (action.type) {
        case SHOW_SECRET:
            return {
                ...state,
                message: action.secret
            }
        default:
            return state
    }
}