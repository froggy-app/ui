import {
  Column,
  Container,
  Row,
  Button,
  TextButton,
} from '@froggy-app/lilypad';
import froggyLogo from 'assets/images/froggy-logo.png';
import NavbarContainer from 'components/shared/NavbarContainer';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const navigateToRegister = () => navigate('/register');

  return (
    <Container height="100vh">
      <Column>
        <NavbarContainer
          leading={
            <>
              <img src={froggyLogo} className="navbar-logo mr-xs" />
              <h1>froggy</h1>
            </>
          }
        >
          <TextButton label="Register" onClick={() => navigate('/register')} />
          <TextButton label="Login" onClick={() => navigate('/login')} />
        </NavbarContainer>
        <Column alignItems="center" justifyContent="center">
          <Row justifyContent="center" alignItems="center">
            <Container width="370px" className="mr-xl">
              <h1 className="mb-xs jumbo">Shorten links and gather data.</h1>
              <p className="mt-sm">
                froggy makes sharing links easy, with short and easy to type
                links. Our analytics dashboards make it easy to get to know your
                customer.
              </p>
              <Button
                label="Get started"
                onClick={navigateToRegister}
                className="mt-lg"
              />
            </Container>
          </Row>
        </Column>
      </Column>
    </Container>
  );
};

export default Landing;
