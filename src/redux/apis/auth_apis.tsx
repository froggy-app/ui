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
    .json();

// TODO: Change API response to have message, work better with wretch
