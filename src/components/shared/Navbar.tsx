import {Row, Container} from '@froggy-app/lilypad';

const Navbar = () => {
  return (
    <Container>
      <Row alignItems='center' justifyContent='space-between' className='mx-lg'>
        <h1 className='pl-md'>froggy</h1>
        <Row justifyContent='end' alignItems='center'>
          <a href='/register' className='pr-md'>
            Register
          </a>
          <a href='/login' className='pr-md'>
            Login
          </a>
        </Row>
      </Row>
    </Container>
  );
};

export default Navbar;
