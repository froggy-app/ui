import {Input} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import registerAccount from 'redux/thunks/registerAccount';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailChange = ({value}: {value: string}) => setEmail(value);
  const onPasswordChange = ({value}: {value: string}) => setPassword(value);

  const register = () => {
    dispatch(registerAccount({email, password}));
  };

  return (
    <>
      <Input type='email' onChange={onEmailChange} onSubmit={register} />
      <Input type='password' onChange={onPasswordChange} onSubmit={register} />

      <button onClick={register}>Register</button>
    </>
  );
};

export default Register;
