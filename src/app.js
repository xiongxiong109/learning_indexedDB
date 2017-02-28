// indexeddb
import req from './dbs';
import './mock';
import axios from 'axios';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {AppTitle} from './components/app.title.jsx';
import {List} from './components/list.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				arts: []
			}
		};
	}
	render() {
		let {data} = this.state;
		return (
			<div className="app-container">
				<AppTitle title={data.unm}/>
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
		// axios.post('/apis/list', {
		// 	userName: 'xiongxiong109'
		// })
		// .then(res => {
		// 	_page.setState({'data': res.data.data});
		// 	if (req.db) {
		// 		// 向数据库中添加数据
		// 		this.updateIndexedDb(_page.state.data);
		// 	}
		// })
		// .catch(e => {
		// 	console.log(e);
		// })

		// 回调函数会在数据库打开的时候执行
		req.onsuccess = (e) => {
			req.db = e.target.result;
			this.fetchIndexedDb();
		};
	}
	// 获取数据(使用get方法，必须知道指定的id)
	// fetchIndexedDb() {
	// 	let _page = this;
	// 	// 使用链式调用, 根据设置的key path的值来查找数据
	// 	req.db
	// 	.transaction('articles')
	// 	.objectStore('articles')
	// 	.get('8f2b3820-fd89-11e6-a315-eb87791ac8c5')
	// 	.onsuccess = (e) => {
	// 		let rst = e.target.result;
	// 		if (!!rst) {
	// 			_page.setState({
	// 				data: {
	// 					arts: [..._page.state.data.arts, e.target.result]
	// 				}
	// 			})
	// 		}
	// 		console.log(e.target.result);
	// 	}
	// }
	// 使用游标进行检索
	fetchIndexedDb(cb) {
		let _page = this;
		let arr = [];
		req.db
		.transaction('articles')
		.objectStore('articles')
		.openCursor()
		.onsuccess = function(ev) {
			let cursor = ev.target.result;
			if (cursor) {
				// console.log(cursor.value);
				arr.push(cursor.value);
				cursor.continue();
			} else {
				// console.log(arr);
				console.log('all complete');
				_page.setState({
					data: {
						arts: arr
					}
				})
			}
		}
	}
	// 往数据库里添加数据
	updateIndexedDb(data) {
		// 大写的方式是旧版的实现
		// 新版本的第二个参数是通过字符串readwrite来配置的
		let transaction = req.db.transaction(["articles"], 'readwrite');

		transaction.oncomplete = function() {
			console.log('complete');
		}

		transaction.onerror = function(e) {
			console.log('err');
			console.log(e);
		}

		let objectStore = transaction.objectStore('articles');
		data.arts.map(art => {
			objectStore.add(art);
		});
	}
}

ReactDOM.render(<App/>, document.querySelector('#app'));