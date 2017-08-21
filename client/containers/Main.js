import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/auth/Login';
import NewUser from '../components/auth/NewUser';
import Signup from '../components/auth/Signup';
import UnderConstruction from '../components/common/UnderConstruction';

import '../scss/app.scss';

export default class Main extends Component {
  render() {
    return (
    	<div className="main">
		    <Switch>
			    <Route path="/" component={Home} />
			    <Route path="/login" component={Login} />
			    <Route path="/newuser" component={NewUser} />
			    <Route path="/signup" component={Signup} />
			    <Route path="/404" component={UnderConstruction} />
		    </Switch>
	    </div>
    );
  }
}