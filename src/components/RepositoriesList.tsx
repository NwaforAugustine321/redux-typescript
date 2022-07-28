import React, { useState } from 'react';

import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActionCreators } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { repositoriesCreator } = useActionCreators();
	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		repositoriesCreator(searchTerm);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={(e) => setSearchTerm(e.target.value)} />
				<button>submit</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>loading...</h3>}
			{!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
		</div>
	);
};

export default RepositoriesList;
