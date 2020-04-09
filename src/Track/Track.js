import React from "react";
// import Radium from "radium";
import classes from './Track.module.scss'

class Track extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Track componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Track shouldComponentUpdate', nextProps, nextState, nextContext)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Track componentWillUpdate', nextProps, nextState, nextContext)
    }

    componentDidUpdate() {
        console.log('Track componentDidUpdate')
    }

    render() {
        console.log('Track render')

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

export default Track