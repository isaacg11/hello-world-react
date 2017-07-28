import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { connect } from "react-redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: state.count = 0 };
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

function onIncrement() {
  return { type: 'INCREMENT' }
}

function onDecrement() {
  return { type: 'DECREMENT' }
}

function onReset() {
  return { type: 'RESET' }
}

const Counter = ({ count, onIncrement, onReset, onDecrement }) => (
  <div>
    <h1>{count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onReset}>Reset</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const ConnectedCounter = connect(mapStateToProps, { onIncrement, onDecrement, onReset })(Counter)

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
    <ConnectedCounter/>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render)
render();
