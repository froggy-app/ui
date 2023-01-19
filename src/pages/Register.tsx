import {Column, Container, Input, Button} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import registerAccount from 'redux/thunks/registerAccount';

const passwordRules = [
  {
    label: 'An uppercase character',
    valid: (text: string) => /^(?=.*[A-Z])/.test(text),
  },
  {
    label: 'A lowercase character',
    valid: (text: string) => /^(?=.*[a-z])/.test(text),
  },
  {
    label: 'A number',
    valid: (text: string) => /^(?=.*[0-9])/.test(text),
  },
  {
    label: 'A special symbol (!@#$%^&*])',
    valid: (text: string) => /^(?=.*[!@#$%^&*])/.test(text),
  },
  {
    label: '12 to 64 characters',
    valid: (text: string) => text.length >= 12 && text.length <= 64,
  },
];

const Register = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEmailChange = ({value, valid}: {value: string; valid: boolean}) => {
    setEmailValid(valid);
    setEmail(value);
  };
  const onPasswordChange = ({
    value,
    valid,
  }: {
    value: string;
    valid: boolean;
  }) => {
    setPasswordValid(valid);
    setPassword(value);
  };

  const register = () => {
    dispatch(registerAccount({email, password})).then(({payload}: any) => {
      if (!payload.errors) {
        navigate('/home');
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
            onSubmit={register}
            valid={emailValid}
            invalid={!emailValid}
            hint={emailValid ? '' : 'Must be a valid email'}
            className='mb-md'
          />
          <Input
            type='password'
            label='Password'
            onChange={onPasswordChange}
            onSubmit={register}
            valid={passwordValid}
            invalid={!passwordValid}
            hint='Password must contain:'
            rules={passwordRules}
            className='mb-lg'
          />

          <Button onClick={register} label='Register' />
        </Container>
      </Column>
    </Container>
  );
};

export default Register;
