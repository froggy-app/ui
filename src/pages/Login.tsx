import { Column, Container, Input, Button } from '@froggy-app/lilypad';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from 'redux/slices/auth_slice';
import loginUser from 'redux/thunks/loginUser';

const Login = () => {
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEmailChange = ({ value }: { value: string }) => {
    setEmail(value);
    setInvalid(false);
  };
  const onPasswordChange = ({ value }: { value: string }) => {
    setPassword(value);
    setInvalid(false);
  };

  const login = () => {
    dispatch(loginUser({ email, password })).then(
      ({ payload }: LoginResponse) => {
        if (payload && payload.error) {
          setInvalid(true);
        } else {
          setInvalid(false);
          navigate('/home');
        }
      }
    );
  };

  return (
    <Container height="100vh">
      <Column justifyContent="center" alignItems="center">
        <Container width="clamp(200px, 50%, 600px)">
          <Input
            type="email"
            label="Email"
            onChange={onEmailChange}
            onSubmit={login}
            invalid={invalid}
            className="mb-md"
          />
          <Input
            type="password"
            label="Password"
            onChange={onPasswordChange}
            onSubmit={login}
            invalid={invalid}
            hint={invalid ? 'Invalid username or password' : ''}
            className="mb-md"
          />

          <Button onClick={login} label="Log in" />
        </Container>
      </Column>
    </Container>
  );
};

export default Login;
