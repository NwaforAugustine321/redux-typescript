import axios from 'axios';
import { Dispatch } from 'redux';

import { Action } from '../actions/index';
import { ActionType } from '../action-types';

export const repositoriesCreator = (searchTerm: string) => async (
	dispatch: Dispatch<Action>
) => {
	dispatch({ type: ActionType.REPOSITORYSEARCH });

	try {
		const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
			params: {
				text: searchTerm,
			},
		});

		const names = data.objects.map((result: any) => result.package.name);

		dispatch({ type: ActionType.REPOSITORYSEARCHSUCCESS, payload: names });
	} catch (error) {
		dispatch({
			type: ActionType.REPOSITORYSEARCHERROR,
			payload: error.message,
		});
	}
};
