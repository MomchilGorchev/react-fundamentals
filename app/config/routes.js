import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'

let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="playerOne" component={PromptContainer} />
			<Route path="playerTwo/:playerOne" component={PromptContainer} />
		</Route>
	</Router>
)

module.exports = routes;