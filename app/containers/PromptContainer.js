import React from 'react'
import Prompt from '../components/Prompt'
let hello = require('belgor-test').default;

	
class PromptContainer extends React.Component {

	constructor(props){

		super(props);
		this.state = {

			username: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleChange(e){

		this.setState({
			username: e.target.value
		});

	}

	handleSubmit(){

		let username = this.state.username;

		this.setState({
			username: ''
		});

		if(this.props.routeParams.playerOne){
			
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			});

		} else {
			this.context.router.push(`/playerTwo/${this.state.username}`)
		}
	}

	render(){
		return (
			<Prompt 
				onSubmitUser={this.handleSubmit}
				onUpdateUser={this.handleChange}
				header={this.props.route.header}
				username={this.state.username}
			/>
		)
	}
}
PromptContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

module.exports = PromptContainer;