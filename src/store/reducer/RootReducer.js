import { combineReducers } from "redux";
import EstoreReducer from "./EstoreReducer";
import  AuthReducer from "./AuthReducer"


const RootReducer = combineReducers(
     {
        EstoreReducer,
        AuthReducer
     }
)


export default RootReducer;