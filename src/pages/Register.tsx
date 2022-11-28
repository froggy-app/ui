import {Input} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import registerAccount from 'redux/thunks/registerAccount';

const Register = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);

  const dispatch = useDispatch();

  const onEmailChange = ({value, valid}: {value: string; valid: boolean}) => {
    console.log(valid);
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
    console.log(valid);
    setPasswordValid(valid);
    setPassword(value);
  };

  const register = () => {
    dispatch(registerAccount({email, password}));
  };

  return (
    <>
      <Input
        type='email'
        label='Email'
        onChange={onEmailChange}
        onSubmit={register}
        valid={emailValid}
        invalid={!emailValid}
        hint={emailValid ? '' : 'Must be a valid email'}
      />
      <Input
        type='password'
        label='Password'
        onChange={onPasswordChange}
        onSubmit={register}
        valid={passwordValid}
        invalid={!passwordValid}
        hint={
          passwordValid
            ? ''
            : 'Password must contain at least 1 lowercase, 1 uppercase, one special symbol (!@#$%^&*]) and have a length of 12-64 characters.'
        }
      />

      <button onClick={register}>Register</button>
    </>
  );
};

export default Register;
