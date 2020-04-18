import React, { Component } from 'react';
import './App.scss';
import Track from "./Track/Track";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false)

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false,
            tracks: [
                {performer:'Mind Against', name: 'Track 1'},
                {performer:'Tale of Us', name: 'Track 1'},
                {performer:'Tale of Us', name: 'Track 2'}
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
                            index={index}
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

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>

                <hr/>

                <button
                    style={{ marginTop: 20 }}
                    onClick={ this.toggleTrackHandler }
                >Toggle tracks</button>

                <button onClick={() => this.setState({clicked: true})}>Change clicked</button>

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
