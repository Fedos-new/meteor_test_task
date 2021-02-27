import React from 'react'
import {ArticlePage} from "./ArticlePage"
import {useSelector} from "react-redux";


export const ArticlePageContainer = (props) => {
    let articleId = props.match.params.articleId

    const posts = useSelector(state=> state.posts.posts)
    const users = useSelector(state=> state.users.users)

    const findPost = posts.find(el => el.id === +articleId)
    let authorId = findPost.userId
    const findAuthor = users.find(el => el.id === +authorId)


    return (
        <div >
            {/*<button onClick={()=> {console.log(findPost.body)}}>получить id</button>*/}
            <ArticlePage articleId={articleId}
                         body={findPost}
                         title={findPost}
                         author={findAuthor}
            />
        </div>
    )
}
