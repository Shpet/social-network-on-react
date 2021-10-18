import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerNavbar from "./reducerNavbar";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerUsers from "./reducerUsers";
import reducerAuth from "./reducerAuth";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    navbar: reducerNavbar,
    profilePage: reducerProfile,
    messagePage: reducerMessage,
    usersPage: reducerUsers,
    auth: reducerAuth
}),
    store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;