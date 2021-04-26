import React from "react";

const Context = React.createContext();

const ContextProvider = (props) => {
    return (
        <Context.Provider value={{}}>
           {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};
