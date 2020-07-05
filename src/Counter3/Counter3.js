import React from 'react';
import {connect} from 'react-redux';
import {add2} from '../redux/actions/actions';

class Counter3 extends React.Component {
    render(){
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <button onClick={() => this.props.onChange(1)}>Add</button>
                <button onClick={() => this.props.onChange(-1)}>Sub</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter3.counter3
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: number => dispatch(add2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter3)