import { Row, Container } from '@froggy-app/lilypad';
import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  leading?: ReactNode;
}

const NavbarContainer = ({ leading, children }: PropsWithChildren<Props>) => {
  return (
    <Container className="px-lg pt-md mb-md">
      <Row alignItems="center" justifyContent="space-between" className="mx-lg">
        {leading}
        <Row justifyContent="end" alignItems="center">
          {children}
        </Row>
      </Row>
    </Container>
  );
};

export default NavbarContainer;
