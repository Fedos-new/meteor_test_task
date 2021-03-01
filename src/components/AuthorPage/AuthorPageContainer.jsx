import React from 'react'
import {useSelector} from "react-redux";
import {AuthorPage} from "./AuthorPage";
import {ArticlesAuthorContainer} from "../AuthorsArticles/AuthorsArticlesContainer";


export const AuthorPageContainer = (props) => {
    let authorId = props.match.params.authorId

    const author = useSelector(state => state.postReducer.users[authorId])

    return (
        <div>
            <AuthorPage author={author}/>
            <ArticlesAuthorContainer author={author}/>
        </div>
    )
}
