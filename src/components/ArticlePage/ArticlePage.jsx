import React from "react";
import {CardContent, Card, Typography, Container, Link} from "@material-ui/core";
import {useStyles} from "../common/useStyles";
import {NavLink} from "react-router-dom";


export const ArticlePage = (props) => {

    const classes = useStyles()
    const {title, body} = props.article
    const {name, id} = props.author

    return (
        <Card className={classes.cardWrap}>
            <CardContent>
                <Container fixed>
                    <div className={classes.mainFeaturesPostContent}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            className={classes.titleArticle}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="body1"
                            paragraph
                        >
                            {body}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                        >
                            {name}
                            <Link component={NavLink} to={'/author_page/' + id}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                > about the author
                                </Typography>
                            </Link>
                        </Typography>
                    </div>
                </Container>
            </CardContent>
        </Card>
    )
}
