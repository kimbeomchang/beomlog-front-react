import React from 'react';

import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';

import { ResultPage } from './Result';

export const SearchPage: React.FC = () => {
	return (
		<div className="flex flex-1 flex-col mt-14">
			<div className="flex px-6 h-16 border-[1px] border-solid border-light-text-1 dark:border-dark-text-1">
				<SearchIcon className="flex max-w-3xl h-full fill-light-text-1 dark:fill-dark-text-1" />
				<input
					placeholder="검색어를 입력하세요"
					className="flex flex-1 text-[24px] text-light-text-1 dark:text-dark-text-1 outline-none bg-light-bg-page-1 dark:bg-dark-bg-page-1 "
				/>
			</div>

			<ResultPage />
		</div>
	);
};
