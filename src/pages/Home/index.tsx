import React from 'react';

import { useAtomValue } from 'jotai';

import { HomeFilterAtom } from '@stores/HomeFilter';

import { RecentPage } from './Recent';
import { TrendingPage } from './Trending';
import { HomeFilter } from './components/Filter';

export const HomePage: React.FC = () => {
	const homeFilter = useAtomValue(HomeFilterAtom);

	return (
		<div className="flex flex-1 flex-col">
			<HomeFilter />

			{homeFilter === 'RECENT' && <RecentPage />}
			{homeFilter === 'TRENDING' && <TrendingPage />}
		</div>
	);
};
