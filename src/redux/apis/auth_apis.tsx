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
  wretch('/api/auth/login')
    .errorType('json')
    .post({
      email,
      password,
    })
    .error(400, (error) => error.message)
    .error(409, (error) => error.message)
    .json();
