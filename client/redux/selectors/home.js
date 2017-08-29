import { setVisibilityFilter, VisibilityFilters } from '../actions/example';

export const dispatchToProps = dispatch => {
	return {
		dispatchSetVisibilityFiler: () => {
			dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
		}
	};
};