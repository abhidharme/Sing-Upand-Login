import { combineReducers , createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { productReducer } from "./Products/reducer";
import { singupReducer } from "./Sing_up/reducer";


export const rootReducer = combineReducers({
    sign: singupReducer,
    login: loginReducer,
   // products: productReducer
})

export const store = createStore(rootReducer , applyMiddleware(thunk));