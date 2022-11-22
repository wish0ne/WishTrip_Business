import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = '/api/store/';

//대분류 목록 불러오기
export const mainCategory = () => {
  client.get('category/main');
};

//중분류 목록 불러오기
export const middleCategory = (code) => {
  client.get(`category/middle/${code}`);
};

//소분류 목록 불러오기
export const subCategory = (code) => {
  client.get(`category/sub/${code}`);
};

export default client;
