import { atom } from 'recoil';

export const clickInfo = atom({
  key: 'clickInfo',
  default: 0,
});

export const editTitle = atom({
  key: 'editTitle',
  default: '',
});

export const editImage = atom({
  key: 'editImage',
  default: '',
});

export const editContent = atom({
  key: 'editContent',
  default: '',
});

export const selectedCode = atom({
  key: 'selectedCode',
  default: '',
});

export const selectCoord = atom<{ lat: number; lng: number }>({
  key: 'selectedCoord',
  default: undefined,
});

export const selectRadius = atom<number>({
  key: 'selectedRadius',
  default: 1000,
});
