import React, { Component } from 'react';
import { Card, CardBody, Row } from 'reactstrap';

import Utils from '../Utils';

import Budget from './Budget'
import WidgetCardHeader from '../WidgetCardHeader/_WidgetCardHeader'

class BudgetsCard extends Component {
  constructor(props) {
    super(props);
    this.cardHeader = Utils.cardHeaders[1];
    this.buttonID = "newBudget";
    this.actionTitle = "Create a New Budget";
    this.actionConfirm = "Create Budget";
  }
  render() {
    return (
      <Card id="budgetsCard">
        <WidgetCardHeader cardHeader={this.cardHeader} buttonID={this.buttonID} actionTitle={this.actionTitle} actionConfirm={this.actionConfirm} />
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
