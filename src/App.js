import React, { Component } from 'react';
import './App.css';
import Track from "./Track/Track";

class App extends Component {
    state = {
        tracks: [
            {performer:'Mind Against', name:'Track_1'},
            {performer:'Tale of Us', name:'Track_1'},
            {performer:'Tale of Us', name:'Track_2'}
        ],
        pageTitle: 'React components'
    };

    render() {
        const divStyle = {
            textAlign: 'center'
        };

        const tracks = this.state.tracks;

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <Track performer={tracks[0].performer} name={tracks[0].name} />
                <Track performer={tracks[1].performer} name={tracks[1].name} />
                <Track performer={tracks[2].performer} name={tracks[2].name} />
            </div>
        );
    }
}

export default App;
