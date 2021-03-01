import React from 'react'
import {useSelector} from "react-redux";
import {AllArticles} from "./AllArticles";
import {Typography, Card} from "@material-ui/core";
import {useStyles} from "../common/useStyles";


export const AllArticlesContainer = () => {
    const classes = useStyles()
    const users = useSelector(state => state.postReducer.users)
    const posts = useSelector(state => state.postReducer.posts)

    return (
        <Card className={classes.cardWrap}>
            <Typography variant="h3" className={classes.titleMainPage}>All articles</Typography>
            {Object.values(posts).map(post => {
                return <AllArticles
                    authorName={users[post.userId].name}
                    key={post.id}
                    article={post}
                />
            })}
        </Card>
    )
}
