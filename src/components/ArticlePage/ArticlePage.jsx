import React from "react";
import {CardContent,Card, Typography, Container} from "@material-ui/core";
import {useStyles} from "../common/useStyles";


export const ArticlePage = (props) => {

    const classes = useStyles()
    return (
        <Card className={classes.cardArticle}>
            <CardContent >
                <Container fixed>
                    <div className={classes.mainFeaturesPostContent}>
                        <Typography
                            component="h1"
                            variant="h4"
                            gutterBottom
                            className={classes.titleArticle}
                        >
                            {props.article.title}
                        </Typography>

                        <Typography
                            variant="body1"
                            paragraph
                        >
                            {props.article.body}
                        </Typography>
                        <Typography
                            component="h1"
                            variant="h6"
                            gutterBottom
                        >
                            {props.author.name}
                        </Typography>
                    </div>
                </Container>
            </CardContent>
        </Card>
    )
}
