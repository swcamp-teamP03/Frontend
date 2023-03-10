import { CopyListType } from './../types/copy.d';
import { atom } from 'recoil';

type CopyListState = CopyListType[];

export const copyListState = atom<CopyListState>({
  key: 'copyListState',
  default: [],
});
