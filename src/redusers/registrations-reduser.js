import {positions, registration, token} from "./api";
import {getUsersThunk} from "./users-reduser";

let SET_POSITIONS = "SET_POSITIONS"
let SET_TOKEN = "SET_TOKEN"

let initialState = {
    positions: null,
    token: null

}
const registrationReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSITIONS:
            return {
                ...state,
                positions: action.positions
            }
            case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }

        default:
            return state
    }
}
let setPositions = (positions) => ({type: SET_POSITIONS, positions})
let setToken = (token) => ({type: SET_TOKEN, token})


export let thunkPositions = () => (dispatch) => {

    positions.getPositions()

        .then(data => {
            dispatch(setPositions(data))
        })
}

export let thunkReg = (data, token) => (dispatch) => {
        registration.registration(data, token)
            .then(()=> {
                dispatch(getUsersThunk(6))
    })


}
export let thunksetToken = () => (dispatch) => {

    token.ss()
        .then(response => {
            dispatch(setToken(response.data.token))

    })


}


export default registrationReducers