import { combineReducers, createStore } from "redux";
import reducerNavbar from "./reducerNavbar";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerUsers from "./reducerUsers";

let reducers = combineReducers({
    navbar: reducerNavbar,
    profilePage: reducerProfile,
    messagePage: reducerMessage,
    usersPage: reducerUsers
}),
    store = createStore(reducers);


export default store;