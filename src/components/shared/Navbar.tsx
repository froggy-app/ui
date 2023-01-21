import {Row, Container} from '@froggy-app/lilypad';

const Navbar = () => {
  return (
    <Container className='px-lg pt-md mb-md'>
      <Row alignItems='center' justifyContent='space-between' className='mx-lg'>
        <img src='froggy-logo.png' className='navbar-logo mr-xs' />
        <h1>froggy</h1>
        <Row justifyContent='end' alignItems='center'>
          <a href='/register' className='pr-md'>
            Register
          </a>
          <a href='/login'>Login</a>
        </Row>
      </Row>
    </Container>
  );
};

export default Navbar;
