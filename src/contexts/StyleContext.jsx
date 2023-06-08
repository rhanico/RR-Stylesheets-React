import React from "react";

export const DEFAULT_STYLE = {
    aside: {
        backgroundColor: "yellow",
        color: "black",
        fontSize: " 30px",
        paddingBlock: "2rem"
    },
    innerAside: {
        backgroundColor: "green",
        fontFamily: "Impact",
        paddingBlock: "1rem",
        color: "beige"
    }
}

const StyleContext = React.createContext(DEFAULT_STYLE);

export default StyleContext;