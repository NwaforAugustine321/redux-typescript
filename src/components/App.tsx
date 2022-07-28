import { Provider } from 'react-redux';

import { store } from '../state/store';
import RepositoriesList from './RepositoriesList';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>Search List of Repositories</h1>
				<RepositoriesList />
			</div>
		</Provider>
	);
};

export default App;
