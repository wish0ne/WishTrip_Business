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
