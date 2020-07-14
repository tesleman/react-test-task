import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import usersReducers from "./users-reduser";


let reducers = combineReducers({
    users: usersReducers,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store