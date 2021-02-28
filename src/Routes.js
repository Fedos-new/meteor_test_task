import React from 'react'
import {Redirect, Route,Switch} from "react-router-dom";
import {ArticleContainer} from "./components/Article/ArticleContainer";
import {ArticlePageContainer} from "./components/ArticlePage/ArticlePageContainer";

export const PATH = {
    ALL_ARTICLES: "/all_articles",
    ARTICLE_PAGE: "/article_page/:articleId?",
}

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.ALL_ARTICLES}/>}/>
                <Route path={PATH.ALL_ARTICLES} render={() => <ArticleContainer />}/>
                <Route path={PATH.ARTICLE_PAGE} render={(props) => <ArticlePageContainer {...props}/>}/>
            </Switch>
        </div>
    )


}

