import React from 'react'
import {useSelector} from "react-redux";
import {Card, Typography} from "@material-ui/core";
import {useStyles} from "../common/useStyles";
import {AuthorsArticles} from "./AuthorsArticles";


export const ArticlesAuthorContainer = (props) => {
    const classes = useStyles()
    const posts = useSelector(state => state.postReducer.posts)

    return (<>

            <Card className={classes.authorPageArticle}>
                <Typography variant="h3" className={classes.titleSecond}>Authors Articles</Typography>
                {Object.values(posts).filter(post => post.userId === props.author.id).map(a => {
                    return (<div key={a.id}>
                            <AuthorsArticles

                                id={a.id}
                                title={a.title}
                            />
                        </div>
                    )
                })
                }
            </Card>
        </>
    )
}
