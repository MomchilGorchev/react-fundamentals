import React from 'react'
import { transparentBg } from '../styles/index'
let PropTypes = React.PropTypes;


class Prompt extends React.Component{

	render(){

		let { username, header, onSubmitUser, onUpdateUser } = this.props;

		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" styles={transparentBg}>
		      <h1>{header}</h1>
		      <div className="col-sm-12">
		        <form onSubmit={onSubmitUser}>
		          <div className="form-group">
		            <input
		              className='form-control'
		              placeholder='Github Username'
		              onChange={onUpdateUser}
		              value={username}
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
Prompt.propTypes = {
	username: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired,

}
module.exports = Prompt