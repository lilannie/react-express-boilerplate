import { combineReducers } from 'redux';

import { visibilityFilter, todos } from "./example";

const reducers = combineReducers({
	visibilityFilter,
	todos
});

export default reducers;
