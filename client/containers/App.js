import React, { Component }from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import Login from '../components/auth/Login';
import NewUser from '../components/auth/NewUser';
import Signup from '../components/auth/Signup';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/newuser" component={NewUser} />
					<Route path="/signup" component={Signup} />
					<Route path="/" component={Main} />
				</Switch>
			</div>
		);

	}
}



