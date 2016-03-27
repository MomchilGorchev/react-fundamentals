import React from 'react'
import * as ReactRouter from 'react-router'
let Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute;
	
import default as Main from '../components/Main'
import default as Home from '../components/Home'


let routes = (

	<Router>
		<Route path="/" component={Main}>
			<Route path="/home" component={Home} />
		</Route>
	</Router>
);

module.exports = routes;