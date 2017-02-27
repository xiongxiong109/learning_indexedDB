// indexeddb
import './dbs.js';
import './mock';
import axios from 'axios';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const AppTitle = ({unm}) => (
	<div className="title">{unm}</div>
)

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
				<ul>
					{(() => {
						if (data.arts) {
							let arr = [];
							data.arts.forEach((item, idx) => {
								arr.push(
									<li key={idx}>
										<h5>{item.title}</h5>
										<p>{item.content}</p>
									</li>
								);
							})
							return arr;
						}
					})()}
				</ul>
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


ReactDOM.render(<App/>, document.querySelector('#app'));