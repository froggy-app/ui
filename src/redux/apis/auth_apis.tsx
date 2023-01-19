import axios from 'axios';
import wretch from 'wretch';

export const registerAccountAPI = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  wretch('/api/auth/register')
    .errorType('json')
    .post({
      email,
      password,
    })
    .error(400, (error) => error.message)
    .error(409, (error) => error.message)
    .json();

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
