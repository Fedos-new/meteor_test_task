import {appAPI} from "../dal/api";

const SET_POSTS = 'SET_POSTS';

let initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.payload.data]
            }
        default:
            return state;
    }
}

export const setPostsAC = (payload) => ({type: SET_POSTS,payload})

export const fetchPostsTS = () => {
    return (dispatch) => {
        appAPI.getPosts()
            .then((res) => {
                dispatch(setPostsAC(res))
            })
            .catch((error) => {
                    (console.log(error.message))
                }
            )
    }
}
