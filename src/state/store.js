import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from '../state/reducers/index';

export const store = createStore(reducers, {}, applyMiddleware(thunk));