import React from 'react'
let transparentBg = require('../styles').transparentBg;

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
			// go to /battler
		} else {
			// go to /playerTwo
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

module.exports = PromptContainer;