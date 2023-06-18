import axios from 'axios';

const BASE_URL = 'https://648dc0c62de8d0ea11e82d21.mockapi.io/';

// const instance = axios.create({
//   baseURL: 'https://648dc0c62de8d0ea11e82d21.mockapi.io/',
// });

export const getContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const addNewContact = async data => {
  const response = await axios.post(`${BASE_URL}/contacts`, data);
  return response.data;
};

export const deleteOneContact = async id => {
  const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return response.data;
};
