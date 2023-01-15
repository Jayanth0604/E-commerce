import { PersistcombineReducers } from "react-persist";
import {combineReducers, CombineReducers } from "redux";

import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
    itemReducer : itemReducer,
    cartReducer : cartReducer
})

export default rootReducer 