import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import App from './App';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
    </Router>,
  document.getElementById('root')
);