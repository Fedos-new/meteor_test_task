import React from 'react'
import {useSelector} from "react-redux";
import {AuthorPage} from "./AuthorPage";


export const AuthorPageContainer = (props) => {
    let authorId = props.match.params.authorId

    const author = useSelector(state => state.postReducer.users[authorId])

    return (
        <div>
            <AuthorPage author={author}/>
        </div>
    )
}
