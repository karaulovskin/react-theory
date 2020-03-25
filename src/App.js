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
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <input type="text" onChange={this.handleInput}/>

                <button
                    onClick={this.changeTitleHandler.bind(this, 'Changed!')}
                >Change title</button>

                { this.state.tracks.map((track, index) => {
                    return(
                        <Track
                            key={index}
                            performer={track.performer}
                            name={track.name}
                            onChangeTitle={() => this.changeTitleHandler(track.performer)}
                        />
                    )

                }) }
            </div>
        );
    }
}

export default App;
