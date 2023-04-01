import { atom } from 'jotai';

import { THomeFilter } from '@typings/HomeFilter';

export const HomeFilterAtom = atom<THomeFilter>('TRENDING');
