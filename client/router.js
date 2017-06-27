import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from './containers/Main.js';
import Index from './components/Index.js';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index}/>
        </Route>
    </Router>,
    document.getElementById('app')
);


