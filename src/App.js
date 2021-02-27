import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import React, {useEffect} from "react";
import {fetchUsersTS} from "./bll/usersReducer";
import {useDispatch} from "react-redux";
import {fetchPostsTS} from "./bll/postsReducer";
import {ArticlesContainer} from "./components/Articles/ArticlesContainer";
import {PATH, Routes} from "./Routes";
import {NavLink, Redirect} from "react-router-dom";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersTS())
        dispatch(fetchPostsTS())
    }, [])

    return (
        <div>
            <AppBar position="static" className='bar'>
                <Toolbar>
                    <Button color="primary">
                    <NavLink to={PATH.ALL_ARTICLES}>
                            All articles
                    </NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
            <Routes />
        </div>
    );
}

export default App;
