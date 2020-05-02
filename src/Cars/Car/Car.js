import React from 'react'
import classes from './Car.module.scss'


const Car = props => {
    return (
        <div className={classes.Car}>
            <h3>Сar name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
        </div>
    )
}

export default Car