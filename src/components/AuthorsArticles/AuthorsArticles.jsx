import React from 'react'
import {Container, List, Typography, Link, ListItem} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useStyles} from "../common/useStyles";

export const AuthorsArticles = (props) => {

    const classes = useStyles();

    return (

        <Container fixed key={props.id}>
            <List className={classes.rootList} disablePadding>
                <Link component={NavLink} to={'/article_page/' + props.id} underline="none">
                    <ListItem button>
                        <Typography
                            component="h1"
                            variant="h5"
                            gutterBottom
                            className={classes.titleArticleAuthor}
                        >
                            {props.title}
                        </Typography>
                    </ListItem>
                </Link>

            </List>
        </Container>
    )
}
