import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

interface RepositoriesState {
	error: null | string;
	loading: boolean;
	data: string[];
}

const initialState = {
	error: null,
	loading: false,
	data: [],
};

const reducer = (
	state: RepositoriesState = initialState,
	action: Action
): RepositoriesState => {
	switch (action.type) {
		case ActionType.REPOSITORYSEARCH:
			return { loading: true, error: null, data: [] };

		case ActionType.REPOSITORYSEARCHSUCCESS:
			return { loading: false, error: null, data: action.payload };

		case ActionType.REPOSITORYSEARCHERROR:
			return { loading: false, error: action.payload, data: [] };

		default:
			return state;
	}
};

export default reducer;
