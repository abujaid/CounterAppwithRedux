import React, { Component } from 'react'
import { connect } from 'react-redux'

class counter extends Component {

    Add = () => {
        this.props.dispatch({ type: 'INCR' })
    }
    Sub = () => {
        this.props.dispatch({ type: 'DECR' })
    }
    render() {
        return (
            <div>
                <h1>Counter App with Redux</h1>
                <button onClick={this.Add}>+</button>
                {' '}<span>{this.props.counter}</span>{' '}
                <button onClick={this.Sub}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
export default connect(mapStateToProps)(counter)