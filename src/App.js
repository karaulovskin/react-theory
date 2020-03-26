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
        pageTitle: 'React components',
        showTracks: false
    }

    toggleTrackHandler = () => {
        this.setState({
            showTracks: !this.state.showTracks
        })
    }

    changeTitleHandler = pageTitle => {
        this.setState({
            pageTitle
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button
                    onClick={this.toggleTrackHandler}
                >Toggle tracks</button>

                {
                    this.state.showTracks
                    ?   this.state.tracks.map((track, index) => {
                            return(
                                <Track
                                    key={index}
                                    performer={track.performer}
                                    name={track.name}
                                    onChangeTitle={() => this.changeTitleHandler(track.performer)}
                                />
                            )
                        })
                    : null
                }
            </div>
        );
    }
}

export default App;
