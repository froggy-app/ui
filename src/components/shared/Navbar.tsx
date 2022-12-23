import {Row} from '@froggy-app/lilypad';

const Navbar = () => {
  return (
    <Row alignItems='center' justifyContent='space-between' className='mx-lg'>
      <h1>froggy</h1>
      <Row justifyContent='end'>
        <a href='/register' className='pr-sm'>
          Register
        </a>
        <a href='/login'>Login</a>
      </Row>
    </Row>
  );
};

export default Navbar;
