import { setVisibilityFilter, VisibilityFilters } from '../actions/example';

export const mapDispatchToProps = dispatch => {
	return {
		dispatchSetVisibilityFilter: () => {
			return dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
		}
	};
};