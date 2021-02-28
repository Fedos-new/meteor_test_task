import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    titleBar: {
        flexGrow: 1
    },
    titleMainPage: {
        flexGrow: 1,
        textAlign: "center",
        color: "#3c3c3c",
        fontSize: "44px",
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(4)
    },
    titleArticle: {
        flexGrow: 1,
        textAlign: "center",
        fontSize: "28px",
    },
    titleAuthorName: {
        flexGrow: 1,
        textAlign: "end",
        color: "#535353",
        fontStyle: 'italic',
        fontSize: "20px",
        paddingRight: '24px',
    },
    mainFeaturesPost: {
        position: "relative",
        marginBottom: theme.spacing(4),
    },
    mainFeaturesPostContent: {
        position: "relative",
        marginTop: theme.spacing(8)
    },
    cardWrap: {
        width: "64%",
        minWidth: "320px",
        flexGrow: 1,
        margin: "0 auto"
    },
    cardAuthorContent: {
        flexGrow: 1,
        textAlign: "center",
    },
    catchPhrase: {
        fontStyle: "italic"
    }
}))
