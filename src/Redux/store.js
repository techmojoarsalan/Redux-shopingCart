import {combineReducers, createStore} from "redux"
import {shopReucer} from "./shopReucer"
const rootReducer = combineReducers({
    shop: shopReucer,
});


let store=createStore(rootReducer)
export default store