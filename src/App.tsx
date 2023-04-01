import React from 'react';

import { useAtomValue } from 'jotai';

import { DarkModeAtom } from '@stores/DarkMode';

import { Header } from '@components/Header';

import { Routes } from './routes';

const App: React.FC = () => {
	/**
	 * 다크 모드
	 * 		1. 기본 값은 운영 체제 기본 설정 값으로 한다.
	 * 		2. localStorage 'darkMode' 가 'true' 인 경우 -> dark mode
	 * 		3. localStorage 'darkMode' 가 'false' 인 경우 -> light mode
	 */
	const darkMode = useAtomValue(DarkModeAtom);

	return (
		<div className={`flex min-h-screen w-full justify-center ${darkMode && 'dark'}`}>
			<div className="flex flex-1 justify-center bg-light-bg-page-1 dark:bg-dark-bg-page-1">
				<div className="flex flex-col w-[90%] bg-light-bg-page-1 dark:bg-dark-bg-page-1">
					<Header />
					<Routes />
				</div>
			</div>
		</div>
	);
};

export default App;
