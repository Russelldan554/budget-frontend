import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';

const Footer = () => (
  <Container className="footer bg-dark" fluid>
    <Row noGutters>
      <Col className="text-left" xs={11}>
        <div>
          {'This project was developed for CMSC 495 at UMUC'}
        </div>
      </Col>
      <Col className="text-right my-auto" xs={1}>
        <a href="https://github.com/Russelldan554/budget-app">
          <i className="fa fa-github" />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
