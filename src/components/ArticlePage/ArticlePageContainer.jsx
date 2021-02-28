import React from 'react'
import {ArticlePage} from "./ArticlePage"
import {useSelector} from "react-redux";


export const ArticlePageContainer = (props) => {
    let articleId = props.match.params.articleId

    const post = useSelector(state => state.postReducer.posts[articleId])
    const users = useSelector(state => state.postReducer.users)

    return (
        <div>
            <ArticlePage article={post}
                         author={users[post.userId]}
            />
        </div>
    )
}
