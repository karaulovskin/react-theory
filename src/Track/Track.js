import React from "react";

export default props => (
    <div style={{
        marginBottom: '10px',
        paddingBottom: '20px',
        border: '1px solid #ccc'
    }}>
        <h3>{ props.performer }</h3>
        <p><strong>{ props.name }</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelet}>Delet</button>
    </div>
)