import { atomWithStorage } from 'jotai/utils';

export const DarkModeAtom = atomWithStorage<boolean>(
	'darkMode',
	Boolean(window.matchMedia('(prefers-color-scheme: dark)').matches)
);
