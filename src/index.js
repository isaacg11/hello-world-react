import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESTART':
      return state = 0;
    default:
      return state;
  }
}

const Counter = ({ value, onIncrement, onReset, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onReset}>Reset</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Counter
    value={ store.getState() }
    onIncrement={ () => store.dispatch({ type: 'INCREMENT' }) }
    onDecrement={ () => store.dispatch({ type: 'DECREMENT'}) }
    onReset={ ()=> store.dispatch({ type: 'RESTART'}) }
    />,
    document.getElementById('root')
  );
};

render();
store.subscribe(render)
