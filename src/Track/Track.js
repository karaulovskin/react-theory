import React from "react";

export default props => (
    <div style={{
        marginBottom: '10px',
        paddingBottom: '20px',
        border: '1px solid #ccc',
        boxShadow: '0px 4px 5px 0 rgba(0, 0, 0, .2)',
        borderRadius: 1
    }}>
        <h3>{ props.performer }</h3>
        <p><strong>{ props.name }</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelet}>Delet</button>
    </div>
)