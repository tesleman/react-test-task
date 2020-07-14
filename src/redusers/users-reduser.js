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
export let getUsersThunk = (pageSize) => (dispatch) => {
    getUsers.users(pageSize)
        .then(response => {
            dispatch(setUsers(response.data.users))
            dispatch(setTotal(response.data.total_users))
        })
}

export let currentUserThunk = (page) => (dispatch) => {
    getUsers.users(page)
        .then(response => {
            dispatch(setUsers(response.data.users))
            dispatch(changePage(page))
            dispatch(setTotal(response.data.total_users))
        })
}

export default usersReducers