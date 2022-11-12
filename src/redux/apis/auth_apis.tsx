import wretch from 'wretch';

export const registerAccountAPI = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  wretch('/api/auth/register')
    .post({
      email,
      password,
    })
    .json();
