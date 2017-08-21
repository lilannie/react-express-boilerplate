import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Router from './router';

ReactDOM.render(
	<BrowserRouter history={browserHistory}>
		<Router />
	</BrowserRouter>,
	document.getElementById('app')
);


