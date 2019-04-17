import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Footer  = props => {
  return (
    <Container className="footer bg-dark" fluid>
      <Row noGutters>
        <Col className="text-left" xs={11}>
        <a href="mailto:someone@example.com" target="_top">
          This is a School Project. Do not enter real information!
        </a>
        </Col>
        <Col className="text-right my-auto" xs={1}>
          <a href="https://github.com/Russelldan554/budget-app">
            <i className="fa fa-github"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
