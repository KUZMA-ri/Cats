import React, { useContext } from "react";
const myContext = React.createContext('light');

const FuncContext = () => {
    return(
        <div>
            <myContext.Provider value='dark'>
                <Second/>
            </myContext.Provider>
        </div>
    ) 
}

const Second = () => {
    const theme = useContext(myContext)
    return(
        <div theme={theme}></div>
    )
}
