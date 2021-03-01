import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {AllArticlesContainer} from "./components/AllArticles/AllArticlesContainer";
import {ArticlePageContainer} from "./components/ArticlePage/ArticlePageContainer";
import {AuthorPageContainer} from "./components/AuthorPage/AuthorPageContainer";
import {AllAuthorsContainer} from "./components/AllAuthors/AllAuthorsContainer";

export const PATH = {
    ALL_ARTICLES: "/all_articles",
    ALL_AUTHORS: "/all_authors",
    ARTICLE_PAGE: "/article_page/:articleId?",
    AUTHOR_PAGE: "/author_page/:authorId?",
}

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.ALL_ARTICLES}/>}/>
                <Route path={PATH.ALL_ARTICLES} render={() => <AllArticlesContainer/>}/>
                <Route path={PATH.ALL_AUTHORS} render={() => <AllAuthorsContainer/>}/>
                <Route path={PATH.AUTHOR_PAGE} render={(props) => <AuthorPageContainer {...props}/>}/>
                <Route path={PATH.ARTICLE_PAGE} render={(props) => <ArticlePageContainer {...props}/>}/>
            </Switch>
        </div>
    )
}

