import { BUY_PRODUCT, CANCEL_PRODUCT } from "../actions";

const cartReducer = (state = 0, action) => {
    switch(action.type) {
        case BUY_PRODUCT:
            return state = state + 1
        case CANCEL_PRODUCT:
            return state = state - 1
        default:
            return state
    }
}

export default cartReducer;