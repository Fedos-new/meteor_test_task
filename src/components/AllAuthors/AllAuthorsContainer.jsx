import React from 'react'
import {useSelector} from "react-redux";
import {Typography, Card} from "@material-ui/core";
import {useStyles} from "../common/useStyles";
import {AllAuthors} from "./AllAuthors";


export const AllAuthorsContainer = () => {

    const classes = useStyles()
    const users = useSelector(state => state.postReducer.users)

    return (
        <Card className={classes.cardWrap}>
            <Typography variant="h3" className={classes.titleMainPage}>All authors</Typography>
            {Object.values(users).map(author => {
                return <AllAuthors
                    key={author.id}
                    author={author}
                />
            })}
        </Card>
    )
}
