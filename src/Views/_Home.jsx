import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import AccountsCard from '../Components/AccountsCard/_AccountsCard'

import TransactionsTable from "../Components/TransactionsTable"
import {Goal} from "../Components/Goal"

class Home extends Component{
  render() {
    return (
      <React.Fragment>
        <Col className="pb-4" lg={3}>
          <AccountsCard />
        </Col>
        <Col className="pb-4" sm={10} md={8} lg={6}>
          <Card>
            <CardHeader>
              <h3>Recent Transactions</h3>
            </CardHeader>
            <CardBody>
              <TransactionsTable />
            </CardBody>
          </Card>
        </Col>
        <Col className="pb-4" sm={10} md={12} lg={3}>
          <Card>
            <CardHeader>
              <h3>Budget Goals</h3>
            </CardHeader>
            <CardBody>
              <Goal spent='20' max='100' category="Shopping" />
              <Goal spent='90' max='100' category="Restaraunt" />
              <Goal spent='150' max='100' category="Groceries" />
              <Goal spent='1400' max='1400' category="Rent" />
            </CardBody>
          </Card>
        </Col>
      </ React.Fragment>
    );
  }
}

export default Home;
