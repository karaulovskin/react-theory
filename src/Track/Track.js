import React from "react";
import './Track.css'

export default props => {
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

    return (
        <div className="Track">
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