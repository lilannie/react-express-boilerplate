import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../redux/selectors/home';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
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

Home.PropTypes = {
	dispatchSetVisibilityFilter: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(Home);