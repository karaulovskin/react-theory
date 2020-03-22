import React, { Component } from 'react';
import './App.css';
import Track from "./Track/Track";

class App extends Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1>React</h1>
                <Track performer={'Mind Against'} name={'Track_1'}>
                    <p style={{color: 'gray'}}>6:52</p>
                </Track>
                <Track performer={'Tale of Us'} name={'Track_1'}/>
                <Track performer='Tlae of Us' name={'Track_2'}>
                    <p style={{color: 'gray'}}>4:58</p>
                </Track>
            </div>
        );
    }
}

export default App;
