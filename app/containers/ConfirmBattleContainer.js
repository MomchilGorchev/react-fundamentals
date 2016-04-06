import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends React.Component {

	// getInitialState canot be  defined on a plain JavaScript class. 
	// This is only supported for classes created using React.createClass.
	//
	// getInitialState(){
	// 	return {
	// 		isLoading: true,
	// 		players: []
	// 	}
	// }

	constructor(props){

		super(props);

		this.state = {
			isLoading: true,
			player: []
		}
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