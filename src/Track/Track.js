import React from "react";
import classes from './Track.module.scss'
import withClass from "../hoc/withClass";

class Track extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h3>{ this.props.performer }</h3>
                <p><strong>{ this.props.name }</strong></p>
                <input
                    type="text"
                    onChange={ this.props.onChangeName }
                    value={ this.props.name }
                />
                <button onClick={ this.props.onDelete }>Delete</button>
            </React.Fragment>
        )
    }
}

export default withClass(Track, classes.Track)