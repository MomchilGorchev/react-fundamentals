import React from 'react'
import { transparentBg } from '../styles/index'
	
class PromptContainer extends React.Component {

	constructor(props){

		super(props);
		this.state = {

			username: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.submitHandle = this.submitHandle.bind(this);
	}	

	handleChange(e){

		this.setState({
			username: e.target.value
		});

	}

	submitHandle(){

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
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" styles={transparentBg}>
		      <h1>{this.props.route.header}</h1>
		      <div className="col-sm-12">
		        <form onSubmit={this.submitHandle}>
		          <div className="form-group">
		            <input
		              className='form-control'
		              placeholder='Github Username'
		              onChange={this.handleChange}
		              value={this.state.username}
		              type='text'
		              />
		          </div>
		          <div className="form-group col-sm-4 col-sm-offset-4">
		            <button
		              className="btn btn-block btn-success"
		              type="submit">
		                Continue
		            </button>
		          </div>
		        </form>
		      </div>
		    </div>
		)
	}
}
PromptContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

module.exports = PromptContainer;