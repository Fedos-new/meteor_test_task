import React from 'react'
import {useSelector} from "react-redux";
import {Article} from "./Article";
import {Typography} from "@material-ui/core";
import {useStyles} from "../common/useStyles";


export const ArticleContainer = () => {
    const classes = useStyles()
    const users = useSelector(state => state.postReducer.users)
    const posts = useSelector(state => state.postReducer.posts)

    return (
        <div>
            <Typography variant="h3" className={classes.titleMainPage}>All articles</Typography>
            {Object.values(posts).map(post => {
                return <Article
                    authorName={users[post.userId].name}
                    key={post.id}
                    article={post}

                />
            })}
        </div>
    )
}
