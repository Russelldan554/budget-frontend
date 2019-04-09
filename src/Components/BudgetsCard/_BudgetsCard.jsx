import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';

import Budget from './Budget'

class BudgetsCard extends Component {
  render() {
    return (
      <Card className="budgetsCard">
        <CardHeader>
          <h3 className="cardHeader">Budgets</h3>
        </CardHeader>
        <CardBody>
          <Row noGutters>
            {/*For each budget in database (for pertaining user) create a Budget Component with the appropriate props*/}
            <Budget spent={"20"} max={"100"} category={"Shopping"} />
            <Budget spent={"90"} max={"100"} category={"Restaurant"} />
            <Budget spent={"150"} max={"100"} category={"Groceries"} />
            <Budget spent={"1400"} max={"1400"} category={"Rent"} />
          </ Row>
        </CardBody>
      </Card>
    );
  }
}

export default BudgetsCard;
