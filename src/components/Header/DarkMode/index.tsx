import React from 'react';

import { useAtom } from 'jotai';

import { DarkModeAtom } from '@stores/DarkMode';

import { ReactComponent as DarkIcon } from '@assets/icons/dark.svg';
import { ReactComponent as LightIcon } from '@assets/icons/light.svg';

export const DarkModeButton: React.FC = () => {
	const [darkMode, setDarkMode] = useAtom(DarkModeAtom);

	return (
		<div
			onClick={() => {
				setDarkMode(!darkMode);
			}}
			className="h-10 w-10"
		>
			{darkMode ? <LightIcon /> : <DarkIcon />}
		</div>
	);
};
