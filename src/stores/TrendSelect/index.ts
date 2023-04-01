import { atom } from 'jotai';

import { ITrendSelectLabelValue } from '@interfaces/TrendSelect';

export const TREND_SELECT: ITrendSelectLabelValue[] = [
	{
		label: '오늘',
		value: 'TODAY',
	},
	{
		label: '이번 주',
		value: 'WEEK',
	},
	{
		label: '이번 달',
		value: 'MONTH',
	},
	{
		label: '올해',
		value: 'YEAR',
	},
];

export const TrendSelectAtom = atom(TREND_SELECT[0].value);
