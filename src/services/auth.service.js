import request from './request';

export function loginUser(credentials) {
  return request.post('/api/auth/login', credentials)
    .then(({ data }) => data);
}

export default { loginUser };
