import React from "react";

const MyContext = React.createContext('light'); //('') - значение по умолчанию, можно ничего не писать

class ClassContext extends React.Component {
    render() {
        return(
            <MyContext.Provider value="dark">
                <Second />
            </MyContext.Provider>       
        )
    }
}

export default ClassContext;


class Second extends React.Component {
    static contextType = MyContext;
    render() {
        return(
            <div theme={this.context}></div>
        )
    }
}