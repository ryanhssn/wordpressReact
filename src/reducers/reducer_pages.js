import _ from 'lodash';
import { FETCH_PAGES, FETCH_PAGE } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_PAGE:
			return { ...state, [action.payload.data.slug]: action.payload.data}
		case FETCH_PAGES:
			return _.mapKeys(action.payload.data, 'slug');
		default:
			return state;
	}
}