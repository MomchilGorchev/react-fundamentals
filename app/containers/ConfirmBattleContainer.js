import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends React.Component {

	constructor(props){

		super(props);

		this.state = {
			isLoading: true,
			player: []
		}
	}

	// Lifecycle events
	
	// 1. getInitialState canot be  defined on a plain JavaScript class. 
	// This is only supported for classes created using React.createClass.
	//
	// getInitialState(){
	// 	return {
	// 		isLoading: true,
	// 		players: []
	// 	}
	// }

	componentWillMount(){
		
		console.log('componentWillMount')
	}

	componentDidMount(){

		let query = this.props.location.query
	}

	render(){

		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInsfo={this.state.playersInsfo}
			/>
		)
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = ConfirmBattleContainer;