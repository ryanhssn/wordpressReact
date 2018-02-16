import { combineReducers } from 'redux';
import PagesReducers from './reducer_pages';

const rootReducer = combineReducers({
	pages: PagesReducers
})

export default rootReducer;