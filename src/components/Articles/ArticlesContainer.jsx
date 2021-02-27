import React from 'react'
import {Articles} from "./Articles";
import {useSelector} from "react-redux";


export const ArticlesContainer = (props) => {

    const users = useSelector(state=> state.users.users)
    const posts = useSelector(state=> state.posts.posts)

    const findAuthorById = (id) => {
        let author = users.find(el => el.id === +id)
        return author
    }


    return (
        <div>
           <Articles  posts={posts}
                      users={users}
                      findAuthorById={findAuthorById}
           />

        </div>
    )
}
