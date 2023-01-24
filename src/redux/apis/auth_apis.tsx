import axios from 'axios';

export const registerAccountAPI = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  axios
    .post('/api/auth/register', {email, password})
    .catch(({response: {status, data}}) => {
      const {errors} = data;
      return {errors, status};
    });

export const loginAPI = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  axios
    .post('/api/auth/login', {email, password})
    .catch(({response: {status}}) => {
      if (status === 401) {
        return {error: 'Invalid username or password'};
      }
    });
