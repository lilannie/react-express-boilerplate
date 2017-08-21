import React, { Component }from 'react';

import Main from './Main';
import Header from '../components/common/Header';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Header/>
				<Main/>
			</div>
		);

	}
}



