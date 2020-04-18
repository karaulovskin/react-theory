import React from "react";
import classes from './Track.module.scss'
import PropTypes from 'prop-types'
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

Track.propTypes = {
    performer: PropTypes.string.isRequired,
    name: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Track, classes.Track)