import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';

export const SearchButton: React.FC = () => {
	return (
		<Link to="search">
			<SearchIcon className="h-10 w-10 fill-dark-bg-element-1 dark:fill-light-bg-element-1" />
		</Link>
	);
};
