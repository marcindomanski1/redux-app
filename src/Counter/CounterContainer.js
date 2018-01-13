import React, {Component} from 'react';
import {add, sub, reset, addValue, fetchFromServer} from './logic';
import {connect} from 'react-redux';
import CounterAwesomeButton from './CounterAwesomeButton';

const mapStateToProps = state => {
    return {
        value: state.counter.counterValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(add()),
        sub: () => dispatch(sub()),
        reset: () => dispatch(reset()),
        addValue: (newValue) => dispatch(addValue(newValue)),
        // fetchFromServer: () => dispatch(fetchFromServer())
    }
}

class CounterContainer extends Component {
    //
    // componentDidMount() {
    //     this.props.fetchFromServer();
    // }

    handlerInc = () => {
        this.props.add()
    }

    handlerDec = () => {
        this.props.sub()
    }
    handlerReset = () => {
        this.props.reset()
    }

    minusHundred = () => {
        this.props.addValue(-100);
    }

    render() {
        return (
            <div>
                <div>Counter: {this.props.value}</div>
                <div>
                    <button onClick={this.handlerInc}>Add</button>
                    <button onClick={this.handlerDec}>Sub</button>
                    <button onClick={this.handlerReset}>Reset</button>
                    <CounterAwesomeButton handlerSub={this.minusHundred}/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);