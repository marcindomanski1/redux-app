import React, {Component} from 'react';
import {addValue} from "./logic";
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        addValue: (newValue) => dispatch(addValue(newValue))
    }
}

class CounterSuperButton extends Component {

    handleClick = (event) => {
        this.props.addValue(100);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Add 100!</button>
        );
    }
}

export default connect(null, mapDispatchToProps)(CounterSuperButton);