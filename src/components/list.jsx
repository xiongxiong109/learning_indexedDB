import React, {Component} from 'react';
// list
// a stateless component, a react component must return a react element or null
// but can not return undefined、array or any other invalid object
// so if you execute a loop function in the render method of the react component
// you can't just return the loop array list, but should push the array list notes in an element
// example as follows
const ListItems = ({list}) => {
	let notes;
	notes = list.map((item) => {
		return (
			<li key={item.id}>
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

export class List extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let {list} = this.props;
		// console.log(list);
		if (list && list.length) {
			return <ListItems list={list}/>;
		} else {
			return null;
		}
	}
}

// styles
const styles = {
	tip: {
		'color': '#cd0000',
		'marginLeft': '10px'
	}
};