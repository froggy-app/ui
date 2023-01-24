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

      if (status === 400) {
        if (
          errors[0].field === 'password' &&
          errors[0].reason === 'validation'
        ) {
          // Should never happen (UI should disable submit button if passoword is invalid)
          return {error: 'Password does not meet criteria'};
        } else if (
          errors[0].field === 'email' &&
          errors[0].reason === 'unique'
        ) {
          return {error: 'An account with this email already exists'};
        }
      }

      return errors;
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
