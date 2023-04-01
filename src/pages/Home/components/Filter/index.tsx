import React from 'react';

import { useAtom } from 'jotai';

import { HomeFilterAtom } from '@stores/HomeFilter';
import { TREND_SELECT, TrendSelectAtom } from '@stores/TrendSelect';

import { ReactComponent as ClockIcon } from '@assets/icons/clock.svg';
import { ReactComponent as UpIcon } from '@assets/icons/up.svg';

import { HomeTrendSelect } from '../TrendSelect';

export const HomeFilter: React.FC = () => {
	const [homeFilter, setHomeFilter] = useAtom(HomeFilterAtom);
	const [trendSelect, setTrendSelect] = useAtom(TrendSelectAtom);

	return (
		<div className="flex items-center h-12 mt-6 bg-light-bg-page-1 dark:bg-dark-bg-page-1">
			<div
				onClick={() => {
					setHomeFilter('TRENDING');
				}}
				className="flex w-28 px-4 justify-center items-center"
			>
				<UpIcon className="w-5 mr-2 fill-light-text-1 dark:fill-dark-text-1" />
				<p className="text-light-text-1 dark:text-dark-text-1">트렌딩</p>
			</div>

			<div
				onClick={() => {
					setHomeFilter('RECENT');
				}}
				className="flex w-28 px-4 justify-center items-center"
			>
				<ClockIcon className="w-5 mr-2 fill-light-text-1 dark:fill-dark-text-1" />
				<p className="text-light-text-1 dark:text-dark-text-1">최신</p>
			</div>

			{homeFilter === 'TRENDING' && (
				<HomeTrendSelect value={trendSelect} onChange={setTrendSelect} options={TREND_SELECT} />
			)}
		</div>
	);
};
