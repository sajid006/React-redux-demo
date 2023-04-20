import { combineReducers } from "redux";
import biscuitReducer from "./biscuit/biscuitReducer";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    biscuit: biscuitReducer,
    user: userReducer
})

export default rootReducer