import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import usersReducers from "./users-reduser";
import {reducer as formReducer} from "redux-form"
import registrationReducers from "./registrations-reduser";

let reducers = combineReducers({
    users: usersReducers,
    registrations: registrationReducers,
    form: formReducer,

})

let store = createStore(reducers, applyMiddleware(thunk));

export default store