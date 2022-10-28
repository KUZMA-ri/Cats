import React from 'react';

class ClassRefExample extends React.Component {
    myRef = React.createRef();    // myRef - просто название
    
    handleClick = () => {
        this.myRef.current.style = 'color: red';
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>click</button>
                <p ref={this.myRef}>Text</p>
            </div>
        )
    }
}

export default ClassRefExample;

// ref вносит изменения в DOM (именно поэтому его не рекомендуют использовать). Стили вписываются инлайново