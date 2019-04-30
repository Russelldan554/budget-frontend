import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import AccountsCard from '../Components/AccountsCard/_AccountsCard';

function Accounts() {
  return (
    <Container fluid>
      <Row className="pt-4">
        <Col className="pb-4" lg={12}>
          <AccountsCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Accounts;
