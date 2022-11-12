import {Button, Label} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import registerAccount from 'redux/thunks/registerAccount';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailChange = (e: any) => setEmail(e.target.value);
  const onPasswordChange = (e: any) => setPassword(e.target.value);

  const register = () => {
    dispatch(registerAccount({email, password}));
  };

  return (
    <>
      <input onChange={onEmailChange}></input>
      <input onChange={onPasswordChange}></input>

      <button onClick={register}>Register</button>
      <Button />
      <Label />
    </>
  );
};

export default Register;
