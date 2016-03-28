import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Link extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('Link ih vou mudar', nextProps, nextState);
	}
	render() {
		return (
			<a>{this.props.link}</a>
		);
	}
}

class ES6Hello extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		this.state = {
			data: Immutable.fromJS({ id: 1, title: props.amigo })
		}
	}
	componentWillMount() {
		console.log('vou montar hein');
	}
	componentDidMount() {
		console.log('estou montado');

		setTimeout(() => {
			this.setState((state) => {
				return { data: state.data.updateIn(['title'], title => 'Gabriel') }
			});
		}, 2000);

		setTimeout(() => {
			this.setState((state) => {
				return { data: state.data.update(() => Immutable.Map({ id: 2, title: 'Medina' })) }
			});
		}, 3000);

		setTimeout(() => {
			this.setState((state) => {
				return { data: state.data.update(() => Immutable.Map({ id: 3, title: 'JP' })) }
			});
		}, 4000);
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('ih vou mudar', this.state, nextState);
	}
	render() {
		return (
			<div>
				<h1>Oi amiguinho, eu me chamo {this.state.data.get('title')}</h1>
				<Link link={this.state.data.get('title')} />
			</div>
		);
	}
}

ReactDOM.render(
	<ES6Hello amigo="Jonas"/>,
	document.getElementById('container2')
);