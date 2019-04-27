import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import TransactionsTable from "../Components/Transactions/TransactionsTable"

import AccountsCard from '../Components/AccountsCard/_AccountsCard'
import BudgetsCard from '../Components/BudgetsCard/_BudgetsCard'


class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="pt-4">
          <Col className="pb-4" xl={3} lg={4} md={5} xs={12}>
            <AccountsCard />
          </Col>
          <Col className="pb-4" xl={6} lg={8} md={7} xs={12}>
            <Card>
              <CardHeader>
                <h3>Recent Transactions</h3>
              </CardHeader>
              <CardBody>
                <TransactionsTable />
              </CardBody>
            </Card>
          </Col>
          <Col className="pb-4" xl={3} lg={12}>
            <BudgetsCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
