import {getUsers} from "./api";


let SET_USERS = 'SET-USERS'
let SET_PAGE = 'SET-PAGE'
let SET_TOTAL = 'SET_TOTAL'

let initialState = {
    users: null,
    pageSize: 6,
    total: null
}
const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PAGE:
            return {
                ...state,
                pageSize: action.pageSize
            }
        case SET_TOTAL:
            return {
                ...state,
                total: action.total
            }
        default:
            return state
    }
}
let setUsers = (users) => ({type: SET_USERS, users})
let changePage = (pageSize) => ({type: SET_PAGE, pageSize})
let setTotal = (total) => ({type: SET_TOTAL, total})
export let getUsersThunk = (pageSize) => async (dispatch) => {
   let response = await getUsers.users(pageSize)
            dispatch(setUsers(response.users))
            dispatch(setTotal(response.total_users))
}

export let currentUserThunk = (page) => async (dispatch) => {
    let response= await getUsers.users(page)
            dispatch(setUsers(response.users))
            dispatch(changePage(page))
            dispatch(setTotal(response.total_users))
}

export default usersReducers