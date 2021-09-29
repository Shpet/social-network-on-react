import { combineReducers, createStore } from "redux";
import reducerNavbar from "./reducerNavbar";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerUsers from "./reducerUsers";
import reducerAuth from "./reducerAuth";

let reducers = combineReducers({
    navbar: reducerNavbar,
    profilePage: reducerProfile,
    messagePage: reducerMessage,
    usersPage: reducerUsers,
    auth: reducerAuth
}),
    store = createStore(reducers);


export default store;