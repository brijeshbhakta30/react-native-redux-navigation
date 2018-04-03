import axios from 'axios';

function getAxios() {
  const options = {
    baseURL: 'https://jsonplaceholder.typicode.com',
  };
  return axios.create(options);
}

export default getAxios();
