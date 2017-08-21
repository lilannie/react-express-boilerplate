import React, { Component } from 'react';

import '../components/common/Header';
import '../scss/app.scss';

export default class Main extends Component {
  render() {
    return (
    	<div>
	    <Switch>
		    <Route path="/" render={util.render(<Home />)} />
	    </Switch>
	    </div>
    );
  }
}