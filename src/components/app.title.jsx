import React, {Component} from 'react';

// app title
export const AppTitle = ({title}) => (
	<div style={styles.title}>{title}</div>
)

// styles
const styles = {
	title: {
		color: '#cd0000',
		fontSize: '18px',
		textAlign: 'center'
	}
}