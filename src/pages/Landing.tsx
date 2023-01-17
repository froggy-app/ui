import {Column, Input, Container, Row, Button} from '@froggy-app/lilypad';
import Navbar from 'components/shared/Navbar';

const Landing = () => {
  const shorten = () => {
    return;
  };

  return (
    <Container height='100vh'>
      <Column>
        <Navbar />
        <Column alignItems='center' justifyContent='center'>
          <Container width='clamp(400px, 50vw, 500px)'>
            <Row justifyContent='end'>
              <Input />
              <Button label='shorten' onClick={shorten} />
            </Row>
          </Container>
        </Column>
      </Column>
    </Container>
  );
};

export default Landing;
