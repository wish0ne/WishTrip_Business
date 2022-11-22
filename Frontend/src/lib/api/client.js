import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = '/api/store/';

//대분류 목록 불러오기
export const mainCategory = async () => {
  try {
    const { data } = await client.get('category/main');
    return data;
  } catch (e) {
    throw e;
  }
};

//중분류 목록 불러오기
export const middleCategory = async (code) => {
  try {
    const { data } = await client.get(`category/middle/${code}`);
    return data;
  } catch (e) {
    throw e;
  }
};

//소분류 목록 불러오기
export const subCategory = async (code) => {
  try {
    const { data } = await client.get(`category/sub/${code}`);
    return data;
  } catch (e) {
    throw e;
  }
};

//선택된 카테고리에 해당되는 상권 목록 불러오기
export const getStores = async (code) => {
  try {
    const { data } = await client.get(`${code}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export default client;
