import React from 'react';
import { useRoutes } from 'react-router-dom';

import { HomePage } from '@pages/Home';
import { SearchPage } from '@pages/Search';

export const Routes: React.FC = () => {
	return (
		<div className="flex flex-1">
			{useRoutes([
				{
					index: true,
					path: '/',
					element: <HomePage />,
				},
				{
					path: 'search',
					element: <SearchPage />,
				},
			])}
		</div>
	);
};
