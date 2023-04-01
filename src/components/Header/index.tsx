import React from 'react';

import { DarkModeButton } from '@components/Button/DarkMode';
import { SearchButton } from '@components/Button/Search';
import { SignButton } from '@components/Button/Sign';
import Logo from '@components/Logo';

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
