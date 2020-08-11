import {positions, registration, token} from "./api";
import {getUsersThunk} from "./users-reduser";

let SET_POSITIONS = "SET_POSITIONS"
let SET_TOKEN = "SET_TOKEN"
let SET_MODAL_MESSAGE = "SET_MODAL_MESSAGE"

let initialState = {
    positions: null,
    token: null,
    ModalMessage:''

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
            case SET_MODAL_MESSAGE:
            return {
                ...state,
                ModalMessage: action.message
            }

        default:
            return state
    }
}
let setPositions = (positions) => ({type: SET_POSITIONS, positions})
let setToken = (token) => ({type: SET_TOKEN, token})
let setModalMessage = (message) => ({type: SET_MODAL_MESSAGE, message})


export let thunkPositions = () => async (dispatch) => {
  let response = await positions.getPositions()
    dispatch(setPositions( response.positions))
}

export let thunkReg = (data, token) => async (dispatch) => {
 let response = await registration.registration(data, token)
    console.log(response)
                dispatch(getUsersThunk(6))
                dispatch(setModalMessage(response.message))
}

export let thunksetToken = () => async (dispatch) => {
let response =  await token.ss()
     if (response.success) {
         dispatch(setToken(response.token))
     }
}

export default registrationReducers