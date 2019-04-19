import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import BudgetsCard from '../Components/BudgetsCard/_BudgetsCard';

class Budgets extends Component{
  render() {
    return (
      <Container fluid>
        <Row className="pt-4">
          <Col className="pb-4" lg={12}>
            <BudgetsCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Budgets;
