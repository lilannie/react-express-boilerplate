import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dispatchToProps } from '../redux/selectors/home';

class Home extends Component {
	constructor(props) {
		super(props);

		console.dir(props);

		const { dispatchSetVisibilityFilter } = this.props;
		dispatchSetVisibilityFilter();

	}
	render() {
		return (
			<div className="home">
				Home!
			</div>
		);
	}
};



export default connect(dispatchToProps)(Home);