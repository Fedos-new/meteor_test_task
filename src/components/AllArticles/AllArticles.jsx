import React from 'react'
import {Container, Divider, List, Typography, Link, ListItem} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useStyles} from "../common/useStyles";

export const AllArticles = (props) => {

    const classes = useStyles();

    return (
        <Container fixed>
            <List className={classes.rootList}>
                <Link component={NavLink} to={'/article_page/' + props.article.id} underline="none">
                    <ListItem button>
                        <Typography
                            variant="h5"
                            gutterBottom
                            className={classes.titleArticle}
                        >
                            {props.article.title}
                        </Typography>


                        <Typography
                            variant="h6"
                            gutterBottom
                            className={classes.titleAuthorName}
                        >
                            author: {props.authorName}
                        </Typography>
                    </ListItem>
                </Link>
                <Divider light={true} />
            </List>
        </Container>
    )
}
