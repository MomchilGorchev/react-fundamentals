import React from 'react'
import Styles from '../styles/index'
import { Link } from 'react-router'


class Home extends React.Component {

	render() {
		return (
			<div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
				<h1>Github Battle</h1>
				<p className='lead'>What even is a jQuery?</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Get Started</button>
				</Link>
		    </div>
		)
	}
}

module.exports = Home;