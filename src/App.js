import React, {Component} from 'react';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import CounterContainer from "./Counter/CounterContainer";
import CounterSuperButton from "./Counter/ConterSuperButton";
import counterReducer from './Counter/logic';
import thunk from 'redux-thunk';

import './App.css';
import {Provider} from 'react-redux';

const reducers = combineReducers({
    counter: counterReducer
});

const store = createStore(reducers, applyMiddleware(thunk),
    // compose(
    // window.devToolsExtension ? window.devToolsExtension() : f => f,
    // )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <CounterContainer/>
                    <CounterSuperButton/>

                </div>
            </Provider>
        )
    }
}

export default App;
