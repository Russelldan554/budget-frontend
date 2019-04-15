import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Footer  = props => {
  return (
    <Container className="footer bg-dark" fluid>
      <Row>
        <Col className="text-left">
        <a href="mailto:someone@example.com" target="_top">
          This is a School Project. Do not enter real information!
        </a>
        </Col>
        <Col className="text-right">
          <a href="https://github.com/Russelldan554/budget-app">
            <i className="fa fa-github"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
