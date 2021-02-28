import {appAPI} from "../dal/api";

const SET_POSTS = 'SET_POSTS';
const SET_USERS = 'SET_USERS';
const SET_INIT = 'SET_INIT';

let initialState = {
    posts: {},
    users: {},
    initApp: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_INIT:
            return {
                ...state,
                initApp: action.payload
            }
        default:
            return state;
    }
}

export const setPostsAC = (payload) => ({type: SET_POSTS, payload})
export const setUsersAC = (payload) => ({type: SET_USERS, payload})
export const setInitApp = (payload) => ({type: SET_INIT, payload})

export const fetchData = () => {
    return async (dispatch) => {
        const responseUsers = await appAPI.getUsers()
        const users = responseUsers.data.reduce((acc, user) => {
            acc[user.id] = user
            return acc
        }, {})
        dispatch(setUsersAC(users))
        const responsePosts = await appAPI.getPosts()
        const posts = responsePosts.data.reduce((acc, post) => {
            acc[post.id] = post
            return acc
        }, {})
        dispatch(setPostsAC(posts))
        setTimeout(() => {
            dispatch(setInitApp(true))
        }, 3000)
    }
}

