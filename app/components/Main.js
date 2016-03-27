import React from 'react';

export default class Main extends React.Component {

	render() {

		return(
			<div>Hello from Main!

				{this.props.children}
			</div>
		)
	}
}