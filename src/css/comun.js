import { makeStyles } from "@material-ui/core/styles";

export const getComunStyle = makeStyles((theme) => ({
    background: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },

    buttonAchs: {
        width: "50%",
        height:"55px",
        background: "#007A33",
        borderRadius: "0.71em",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "1.125em",
        color: "#FFFFFF",
        textTransform: "inherit",
        "&:hover": {
            background: "#104F28",
        },
        marginTop: "5px",
    }
}))