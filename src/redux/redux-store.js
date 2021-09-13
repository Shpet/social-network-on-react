import { combineReducers, createStore } from "redux";
import reducerNavbar from "./reducerNavbar";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";

let reducers = combineReducers({
    navbar: reducerNavbar,
    profilePage: reducerProfile,
    messagePage: reducerMessage
}),
    store = createStore(reducers);


export default store;