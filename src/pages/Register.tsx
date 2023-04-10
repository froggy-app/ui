import {Column, Container, Input, Button} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import selectAuthError from 'redux/selectors/selectAuthError';
import registerAccount from 'redux/thunks/registerAccount';

const passwordRules = [
  {
    label: 'An uppercase character',
    valid: (value: string) => /^(?=.*[A-Z])/.test(value)
  },
  {
    label: 'A lowercase character',
    valid: (value: string) => /^(?=.*[a-z])/.test(value)
  },
  {
    label: 'A number',
    valid: (value: string) => /^(?=.*[0-9])/.test(value)
  },
  {
    label: 'A special symbol (!@#$%^&*])',
    valid: (value: string) => /^(?=.*[!@#$%^&*])/.test(value)
  },
  {
    label: '12 to 64 characters',
    valid: (value: string) => value.length >= 12 && value.length <= 64
  }
];

const emailRules = [
  {
    valid: (value: string) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  }
];

const Register = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(selectAuthError);
  const isAuthError = authError !== null;

  const onEmailChange = ({value, valid}: {value: string; valid: boolean}) => {
    setEmailValid(valid);
    setEmail(value);
  };
  const onPasswordChange = ({
    value,
    valid
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
    <Container height="100vh">
      <Column justifyContent="center" alignItems="center">
        <Container width="clamp(200px, 50%, 600px)">
          <Input
            type="email"
            label="Email"
            onChange={onEmailChange}
            onSubmit={register}
            valid={emailValid && !isAuthError}
            invalid={isAuthError}
            hint={isAuthError ? authError : ''}
            rules={emailRules}
            className="mb-md"
          />
          <Input
            type="password"
            label="Password"
            onChange={onPasswordChange}
            onSubmit={register}
            valid={passwordValid}
            hint="Password must contain:"
            rules={passwordRules}
            showRules
            className="mb-lg"
          />

          <Button
            onClick={register}
            label="Register"
            disabled={!passwordValid || !emailValid}
          />
        </Container>
      </Column>
    </Container>
  );
};

export default Register;
