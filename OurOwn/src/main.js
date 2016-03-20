import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = Immutable.fromJS({
			title: 'Hello',
			name: 'Caio',
			suffix: ', lets do this!'
		});
	}
	render() {
		return (
			<h1>{this.state.get('title')} {this.state.get('name')} {this.state.get('suffix')}</h1>
		);
	}
}

var AnotherHello = React.createClass({
	getInitialState() {
	  return Immutable.fromJS({
			title: 'Hello',
			name: 'Caio',
			suffix: ', lets do this!'
		});
	},
  render() {
    return (
      <h1>{this.state.get('title')} {this.state.get('name')} {this.state.get('suffix')}</h1>
    );
  }
});

// function FunctionHello(props) {
// 	return <h1>{props.title}</h1>;
// }

const FunctionHello = (props) => <h1>{props.title}</h1>;

ReactDOM.render(
	<Hello/>,
  document.getElementById('container')
);

ReactDOM.render(
	<AnotherHello/>,
  document.getElementById('container2')
);

ReactDOM.render(
	<FunctionHello title="Heeey" />,
  document.getElementById('container3')
);
