import { atom } from 'jotai';

interface IFormAtom {
  formSubmitted: boolean;
  loading: boolean;
}

export const formAtom = atom<IFormAtom>({
  formSubmitted: false,
  loading: false,
});
