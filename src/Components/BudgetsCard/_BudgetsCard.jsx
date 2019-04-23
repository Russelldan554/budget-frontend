import React, { Component } from 'react';
import { Card, CardBody, Row } from 'reactstrap';

import * as API from '../API';
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
    this.state = {
      isLoading: true,
      budgets: [],
      error: null
    }
  }

  componentDidMount() {
    API.getBudgets(1)
      .then(res => {
        this.setState({
          budgets: res,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState ({
          error,
          isLoading: false
        })
      });
  }

  render() {
    const { isLoading, budgets, error } = this.state;
    return (
      <Card id="budgetsCard">
        <WidgetCardHeader cardHeader={this.cardHeader} buttonID={this.buttonID} actionTitle={this.actionTitle} actionConfirm={this.actionConfirm} />
        <CardBody>
          <Row noGutters>
            {/*For each budget in database (for pertaining user) create a Budget Component with the appropriate props*/}
            <React.Fragment>
              {error ? <Budget spentAmount={0} maxAmount={0} category={<span className="error">{error.message}</span>} /> : null}
              {!isLoading ? (
                budgets.map(budget => {
                  const { budgetId, spentAmount, maxAmount, category } = budget;
                  return (
                    <Budget key={budgetId} spentAmount={spentAmount} maxAmount={maxAmount} category={category} />
                  );
                })
              ) : (
                <Budget spentAmount={0} maxAmount={0} category={"Loading..."} />
              )}
            </React.Fragment>
          </ Row>
        </CardBody>
      </Card>
    );
  }
}

export default BudgetsCard;
