import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    rootList: {
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
    titleSecond: {
        flexGrow: 1,
        textAlign: "center",
        fontSize: "24px",
    },
    titleArticle: {
        flexGrow: 1,
        // textAlign: "center",
        fontSize: "24px",
    },
    titleArticleAuthor: {
        flexGrow: 1,
        textAlign: "start",
        fontSize: "20px",
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
        margin: "0 auto",
        marginBottom: '30px',
        marginTop: '120px'
    },
    authorPageArticle: {
        width: "64%",
        minWidth: "320px",
        margin: "12px auto",
        padding: '30px 0',

    },
    cardAuthorContent: {
        flexGrow: 1,
        textAlign: "center",
    },
    catchPhrase: {
        fontStyle: "italic"
    },
    barButtons: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: '8px 8px 8px 12px'
    },

}))
