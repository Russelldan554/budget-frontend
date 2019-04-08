import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import AccountsCard from '../Components/AccountsCard/_AccountsCard'

class Accounts extends Component{
  render() {
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
}

export default Accounts;
