import { ActionType } from '../action-types/index';

interface RepositoriesSuccess {
	type: ActionType.REPOSITORYSEARCHSUCCESS;
	payload: string[];
}

interface RepositoriesFailure {
	type: ActionType.REPOSITORYSEARCHERROR;
	payload: string;
}

interface RepositoriesSearch {
	type: ActionType.REPOSITORYSEARCH;
}

export type Action =
	| RepositoriesSuccess
	| RepositoriesFailure
	| RepositoriesSearch;
