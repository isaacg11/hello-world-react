import React from 'react';
import ReactDOM from 'react-dom';

class Name extends React.Component {
  render() {
    return <span>{this.props.firstName} {this.props.lastName}</span>
  }
}

class Connected extends React.Component {
  render() {
    return (
      <div>
        <Name firstName={this.props.firstName} lastName={this.props.lastName} /> is {this.props.status}
      </div>
    );
  }
}

ReactDOM.render(
  <Connected firstName="Margaret" lastName="Hamilton" status="Connected" />,
  document.getElementById('root')
);
