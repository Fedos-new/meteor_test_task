import React from 'react'
import {Article} from "./Article/Article";


export const Articles = (props) => {

        return (
        <div>
            {
                Object.values(props.posts).map(a => <Article
                                                             authorId={a.userId}
                                                             key={a.id}
                                                             id={a.id}
                                                             title={a.title}
                                                             body={a.body}
                                                             article={a}
                                                             author={props.findAuthorById(a.userId)}
                />)
            }

        </div>
    )
}
