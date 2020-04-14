import React, { Component } from 'react';
import './App.scss';
import Track from "./Track/Track";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tracks: [
                {performer:'Mind Against', name:'Track_1'},
                {performer:'Tale of Us', name:'Track_1'},
                {performer:'Tale of Us', name:'Track_2'}
            ],
            pageTitle: 'React components',
            showTracks: false
        }
    }

    toggleTrackHandler = () => {
        this.setState({
            showTracks: !this.state.showTracks
        })
    }

    onChangeName(name, index) {
        const track = this.state.tracks[index]
        track.name = name
        const tracks = [...this.state.tracks]
        tracks[index] = track

        // короткая запись
        // this.setState({tracks})

        this.setState({
            tracks: tracks
        })
    }

    deleteHandler(index) {
        const tracks = this.state.tracks.concat()
        tracks.splice(index, 1)

        this.setState({tracks})
    }

    componentWillMount() {
        console.log('App componentWillMount')
    }

    componentDidMount() {
        console.log('App componentDidMount')
    }

    render() {
        console.log('App render')

        const divStyle = {
            textAlign: 'center'
        }

        let tracks = null

        if (this.state.showTracks) {
            tracks = this.state.tracks.map((track, index) => {
                return(
                    <ErrorBoundary key={index}>
                        <Track
                            performer={track.performer}
                            name={track.name}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={(event) => this.onChangeName(event.target.value, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{ this.props.title }</h1>

                <button
                    onClick={ this.toggleTrackHandler }
                >Toggle tracks</button>
                <div
                    style={{
                        width: 400,
                        margin: 'auto',
                        padding: '20px'
                    }}
                >
                    { tracks }
                </div>
            </div>
        );
    }
}

export default App;
