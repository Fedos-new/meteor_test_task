import {appAPI} from "../dal/api";

const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload.data]
            }
        default:
            return state;
    }
}

export const setUsersAC = (payload) => ({type: SET_USERS,payload})

export const fetchUsersTS = () => {
    return (dispatch) => {
        appAPI.getUsers()
            .then((res) => {
                dispatch(setUsersAC(res))
            })
            .catch((error) => {
                    (console.log(error.message))
                }
            )
    }
}
