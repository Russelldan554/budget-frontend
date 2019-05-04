import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';

import TransactionsCard from '../Components/Transactions/TransactionsCard';
import AccountsCard from '../Components/AccountsCard/_AccountsCard';
import BudgetsCard from '../Components/BudgetsCard/_BudgetsCard';


function Home() {
  return (
    <Container fluid>
      <Row className="pt-4">
        <Col className="pb-4" xl={3} lg={4} md={5} xs={12}>
          <AccountsCard />
        </Col>
        <Col className="pb-4" xl={6} lg={8} md={7} xs={12}>
          <TransactionsCard />
        </Col>
        <Col className="pb-4" xl={3} lg={12}>
          <BudgetsCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
