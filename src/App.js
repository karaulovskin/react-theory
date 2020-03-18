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
                <Track />
            </div>
        );
    }
}

export default App;
