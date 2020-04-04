import React from "react";
import Radium from "radium";
import classes from './Track.module.scss'

const Track = props => {

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
            <h3>{ props.performer }</h3>
            <p><strong>{ props.name }</strong></p>
            <input
                type="text"
                onChange={ props.onChangeName }
                value={ props.name }
            />
            <button onClick={ props.onDelete }>Delete</button>
        </div>
    )
}

export default Radium(Track)