import React from 'react'
import {Card, CardContent, Divider, Typography} from "@material-ui/core";
import {useStyles} from "../common/useStyles";
import {AuthorsArticles} from "../AuthorsArticles/AuthorsArticles";


export const AuthorPage = (props) => {

    const classes = useStyles()
    const {name, username, company, address, website, email} = props.author

    return (

        <Card className={classes.cardWrap}>
            <CardContent className={classes.cardAuthorContent}>
                <Typography variant="h6" gutterBottom className={classes.titleArticle}>
                   Full Name: {name}
                </Typography>
                <Divider/>

                <Typography variant="subtitle1"  gutterBottom>
                    Username: {username}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Company: {company.name}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    City: {address.city}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Website: {website}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Email: {email}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Catch Phrase:
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.catchPhrase}>"{company.catchPhrase}"
                </Typography>

                <AuthorsArticles/>
            </CardContent>
        </Card>
    )
}
