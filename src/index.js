import React from 'react';
import ReactDOM from 'react-dom';

class BankAccount extends React.Component {
  state = {
    accountBalance: 25.00
  };

  increment() {
    this.setState(
      {
        accountBalance: this.state.accountBalance + 1
      },
    );
  };

  render() {
    return (
      <div>
        <h3>Account Balance: ${this.state.accountBalance}</h3>
        <button onClick={this.increment.bind(this)}>
          Increase Amount
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <BankAccount />,
  document.getElementById('root')
);
