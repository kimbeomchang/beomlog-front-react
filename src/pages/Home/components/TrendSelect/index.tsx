import React from 'react';

import { TTrendSelect } from '@typings/TrendSelect';

import { ITrendSelectLabelValue } from '@interfaces/TrendSelect';

export interface HomeTrendSelectProps {
	value: TTrendSelect;
	onChange: (value: TTrendSelect) => void;
	options: readonly ITrendSelectLabelValue[];
}

export const HomeTrendSelect: React.FC<HomeTrendSelectProps> = ({ value, onChange, options }) => {
	return (
		<select
			value={value}
			onChange={(e) => {
				// TODO: select value 에 따른 게시글 필터링 기능 추가 2023.04.01 kbc
				onChange(e.target.value);
			}}
			className="w-24 px-2 h-8 bg-light-bg-element-1 dark:bg-dark-bg-element-1 text-light-text-1 dark:text-dark-text-1"
		>
			{options.map((option) => {
				return (
					<option
						key={option.label + option.value}
						label={option.label}
						value={option.value}
						className="text-light-text-1 dark:text-dark-text-1"
					/>
				);
			})}
		</select>
	);
};
