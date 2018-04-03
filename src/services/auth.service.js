import axios from 'axios';

export function loginUser(credentials) {
  return axios.post('/posts', credentials)
    .then(({ data }) => data);
}

export default { loginUser };
