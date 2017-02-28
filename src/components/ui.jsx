import React from 'react';
// ui 组件
export const Input = (props) => (
	<input type="text" defaultValue={props.val} onInput={props.ui_input}/>
)

export const Button = ({children, click}) => (
	<button onClick={click}>{children}</button>
)