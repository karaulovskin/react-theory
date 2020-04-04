import React from "react";
import Radium from "radium";
import './Track.scss'

const Track = props => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    }
    else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .15)',
        ':hover': {
            border: '1px solid #ccc',
            boxShadow: '0 4px 14px 0 rgba(0, 0, 0, .25)',
        }
    }

    return (
        <div className="Track" style={ style }>
            <h3>{ props.performer }</h3>
            <p><strong>{ props.name }</strong></p>
            <input
                type="text"
                onChange={ props.onChangeName }
                value={ props.name }
                className={ inputClasses.join(' ') }
            />
            <button onClick={ props.onDelete }>Delete</button>
        </div>
    )
}

export default Radium(Track)