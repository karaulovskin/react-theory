import React from "react";

// function Track() {
//     return (
//         <div>This is track component</div>
//     )
// }

// const track = () => {
//     return (
//         <div>This is track component</div>
//     )
// }

// const track = () => (
//     <div>
//         This is track component
//         <strong> number 1</strong>
//     </div>
// )

export default props => (
    <div>
        <h3>{ props.performer }</h3>
        <p><strong>{ props.name }</strong></p>
        { props.children }
    </div>
)