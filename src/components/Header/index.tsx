import React from 'react';

import { DarkModeButton } from './DarkMode';
import Logo from './Logo';
import { SearchButton } from './Search';
import { SignButton } from './Sign';

export const Header: React.FC = () => {
	return (
		<header className="flex h-16 items-center justify-between bg-light-bg-page-1 dark:bg-dark-bg-page-1">
			<Logo />

			<div className="flex">
				<DarkModeButton />
				<SearchButton />
				<SignButton />
			</div>
		</header>
	);
};
