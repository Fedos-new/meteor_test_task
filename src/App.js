import "./App.css";
import {
    AppBar,
    Button,
    Toolbar,
    Container,
    Typography,
    Box
} from "@material-ui/core";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PATH, Routes} from "./Routes";
import {NavLink} from "react-router-dom";
import {fetchData} from "./bll/reducer";
import {SplashScreen} from "./components/SplashScreen/SplashScreen";
import {useStyles} from "./components/common/useStyles";


function App() {

    const posts = useSelector(state => state.postReducer.posts)
    const initApp = useSelector(state => state.postReducer.initApp)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchData())
        }
    }, [])

    if (!initApp) {
        return <SplashScreen/>
    }

    return (
        <div>
            <AppBar position="fixed" >
                <Container fixed >
                    <Toolbar >
                        <Typography variant="h6" className={classes.titleBar}>Blog</Typography>
                        <Box mr={3}>
                            <Button component={NavLink} to={PATH.ALL_ARTICLES} variant="contained">
                                All articles
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Routes/>
        </div>
    );
}

export default App;
