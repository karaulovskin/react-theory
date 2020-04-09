import React from "react";
import Radium from "radium";
import classes from './Track.module.scss'

class Track extends React.Component {
    render() {
        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .15)',
            ':hover': {
                border: '1px solid #ccc',
                boxShadow: '0 4px 14px 0 rgba(0, 0, 0, .25)',
            }
        }

        return (
            <div className={ classes.Track } style={ style }>
                <h3>{ this.props.performer }</h3>
                <p><strong>{ this.props.name }</strong></p>
                <input
                    type="text"
                    onChange={ this.props.onChangeName }
                    value={ this.props.name }
                />
                <button onClick={ this.props.onDelete }>Delete</button>
            </div>
        )
    }
}

export default Radium(Track)