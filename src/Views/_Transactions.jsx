import React, { Component } from 'react';
import {
  Col, Row,
} from 'reactstrap';
import TransactionsCard from '../Components/Transactions/TransactionsCard';

class Transactions extends Component {

  render() {
    return (
      <div>
        <Row className="pt-3">
          <Col
            sm={12}
            md={{ size: 10, offset: 1 }}
            lg={{ size: 8, offset: 2 }}
          >
            <TransactionsCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Transactions;
