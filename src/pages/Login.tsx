import {Column, Container, Input} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import loginUser from 'redux/thunks/loginUser';

const Login = () => {
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onEmailChange = ({value}: {value: string}) => {
    setEmail(value);
    setInvalid(false);
  };
  const onPasswordChange = ({value}: {value: string}) => {
    setPassword(value);
    setInvalid(false);
  };

  const login = () => {
    dispatch(loginUser({email, password})).then(({payload}: any) => {
      if (payload.error) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    });
  };

  return (
    <Container height='100vh'>
      <Column justifyContent='center' alignItems='center'>
        <Container width='clamp(200px, 50%, 600px)'>
          <Input
            type='email'
            label='Email'
            onChange={onEmailChange}
            onSubmit={login}
            invalid={invalid}
            className='mb-md'
          />
          <Input
            type='password'
            label='Password'
            onChange={onPasswordChange}
            onSubmit={login}
            invalid={invalid}
            hint={invalid ? 'Invalid username or password' : ''}
            className='mb-md'
          />

          <button onClick={login}>Log in</button>
        </Container>
      </Column>
    </Container>
  );
};

export default Login;
