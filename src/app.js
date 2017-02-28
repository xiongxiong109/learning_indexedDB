// indexeddb
import './dbs.js';
import './mock';
import axios from 'axios';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const AppTitle = ({unm}) => (
	<div className="title">{unm}</div>
)

// a stateless component, a react component must return a react element or null
// but can not return undefined、array or any other invalid object
// so if you execute a loop function in the render method of the react component
// you can't just return the loop array list, but should push the array list notes in an element
// example as follows
const ListItems = ({list}) => {
	let notes;
	notes = list.map((item, idx) => {
		return (
			<li key={idx}>
				<h5>{item.title}{
					(() => {
						if (item.isRead) {
							return <span style={styles.tip}>yes</span>
						}
					})()
				}</h5>
				<p>{item.content}</p>
			</li>
		)
	});
	return (
		<ul>{notes}</ul>
	)
}

class List extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let {list} = this.props;
		console.log(list);
		if (list && list.length) {
			return <ListItems list={list}/>;
		} else {
			return null;
		}
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}
	render() {
		let {data} = this.state;
		return (
			<div className="app-container">
				<AppTitle {...data}/>
				<List list={this.state.data.arts}/>
			</div>
		)
	}
	componentDidMount() {
		this.queryDetail();
	}
	// methods
	queryDetail() {
		let _page = this;
		// use axios to do ajax
		axios.post('/apis/list', {
			userName: 'xiongxiong109'
		})
		.then(res => {
			// console.log(_page);
			// console.log(res.data);
			_page.setState({'data': res.data.data});
			console.log(_page.state.data);
		})
		.catch(e => {
			console.log(e);
		})
	}
}

const styles = {
	tip: {
		'color': '#cd0000',
		'marginLeft': '10px'
	}
};

ReactDOM.render(<App/>, document.querySelector('#app'));