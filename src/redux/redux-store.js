import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerNavbar from "./reducerNavbar";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerUsers from "./reducerUsers";
import reducerAuth from "./reducerAuth";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    navbar: reducerNavbar,
    profilePage: reducerProfile,
    messagePage: reducerMessage,
    usersPage: reducerUsers,
    auth: reducerAuth,
    form: formReducer
}),
    store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;