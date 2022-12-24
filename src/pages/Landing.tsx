import {Column, Input, Container, Row, Button} from '@froggy-app/lilypad';
import Navbar from 'components/shared/Navbar';

const Landing = () => {
  return (
    <Container height='100vh'>
      <Column>
        <Navbar />
        <Column alignItems='center' justifyContent='center'>
          <Container width='clamp(400px, 50vw, 500px)'>
            <Row justifyContent='end'>
              <Container>
                <Input />
              </Container>
              <Button label='shorten' />
            </Row>
          </Container>
        </Column>
      </Column>
    </Container>
  );
};

export default Landing;
