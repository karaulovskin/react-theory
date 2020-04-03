import React from "react";
import './Track.css'

export default props => (
    <div className="Track">
        <h3>{ props.performer }</h3>
        <p><strong>{ props.name }</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelet}>Delet</button>
    </div>
)