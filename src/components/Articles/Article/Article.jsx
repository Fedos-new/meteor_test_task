import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../Routes";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core";
import Link from "@material-ui/core/Link";


export const Article = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: '100ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }));
    const classes = useStyles();

    return (
        <div key={props.id}>
            <List className={classes.root}>
                <Link href={'/article_page/' + props.article.id} target="_blank" rel="noopener">
                    <h3>{props.title}</h3>
                </Link>
                <p>
                    {props.author.name}
                </p>
                <Divider variant="inset" component="li"/>
            </List>
        </div>

    )
}
