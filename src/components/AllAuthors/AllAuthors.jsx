import React from 'react'
import {Container, Divider, List, Typography, Link, ListItem} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useStyles} from "../common/useStyles";

export const AllAuthors = (props) => {

    const classes = useStyles();

    return (
        <Container fixed key={props.author.id}>
            <List className={classes.rootList} disablePadding>
                <Link component={NavLink} to={'/author_page/' + props.author.id} underline="none">
                    <ListItem button>
                        <Typography
                            component="h1"
                            variant="h5"
                            gutterBottom
                            underline='none'
                            className={classes.titleSecond}
                        >
                            {props.author.name}
                        </Typography>
                    </ListItem>
                </Link>
                <Divider light={true}/>
            </List>
        </Container>

    )
}
