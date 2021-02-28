import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    titleBar: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        color: "#3c3c3c",
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(4)
    },
    titleArticle: {
        flexGrow: 1,
        textAlign: "center",
    },
    titleAuthorName: {
        flexGrow: 1,
        textAlign: "center",
        color: "#535353"
    },
    mainFeaturesPost: {
        position: "relative",
        marginBottom: theme.spacing(4),
    },
    mainFeaturesPostContent: {
        position: "relative",
        marginTop: theme.spacing(8)
    },
    cardArticle: {
        width: "60%",
        flexGrow: 1,
        margin: "0 auto"
    }
}))
