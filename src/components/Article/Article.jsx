import React from 'react'
import {Container, Divider, List, Typography, Link} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useStyles} from "../common/useStyles";

export const Article = (props) => {

    const classes = useStyles();

    return (
        <Container fixed>
            <List className={classes.root}>
                <Link component={NavLink} to={'/article_page/' + props.article.id}>
                    <Typography
                        component="h1"
                        variant="h5"
                        gutterBottom
                        className={classes.titleArticle}
                    >
                        {props.article.title}
                    </Typography>
                </Link>
                <Typography
                    component="h3"
                    variant="h6"
                    gutterBottom
                    className={classes.titleAuthorName}
                >
                    author: {props.authorName}
                </Typography>
                <Divider/>
            </List>
        </Container>
    )
}
