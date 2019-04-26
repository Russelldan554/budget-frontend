import React, { Component } from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import * as API from '../API';
import Utils from '../Utils';

import Budget from './Budget'
import WidgetCardHeader from '../WidgetCardHeader/_WidgetCardHeader'

class BudgetsCard extends Component {
  constructor(props) {
    super(props);
    this.actionConfirm = "Create Budget";
    this.actionTitle = " Budget";
    this.buttonID = "Budget";
    this.cardHeader = Utils.cardHeaders[1];
    this.getBudgets = this.getBudgets.bind(this);
    this.toggleDeleteButtons = this.toggleDeleteButtons.bind(this);
    this.state = {
      budgets: [],
      deleteButtons: false,
      error: null,
      isLoading: true,
    }
  }

  getBudgets() {
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

  toggleDeleteButtons() {
    this.setState ({
      deleteButtons: !this.state.deleteButtons
    })
  }

  componentDidMount() {
    this.getBudgets();
  }

  render() {
    const { isLoading, budgets, error } = this.state;
    return (
      <Card id="budgetsCard">
        <WidgetCardHeader 
          actionConfirm={this.actionConfirm} 
          actionTitle={this.actionTitle} 
          buttonID={this.buttonID} 
          cardHeader={this.cardHeader} 
          getBudgets={this.getBudgets} 
          toggleDeleteButtons={this.toggleDeleteButtons} 
        />
        <CardBody>
          <Row noGutters fluid={"true"}>
            {/*Create a Budget Component for each of the User's budgets*/}
            <React.Fragment>
              {error ?  
                <Budget 
                  spentAmount={0} 
                  maxAmount={0} 
                  category={<span className="error">{error.message}</span>} 
                /> 
                : 
                null
              }
              {!isLoading ? (
                budgets.map(budget => {
                  const { budgetId, spentAmount, maxAmount, category } = budget;
                  return (
                    <Budget 
                      category={category} 
                      deleteButtons={this.state.deleteButtons} 
                      getBudgets={this.getBudgets} 
                      id={budgetId} 
                      key={budgetId} 
                      maxAmount={maxAmount} 
                      spentAmount={spentAmount} 
                      
                    />
                  );
                })
              ) : (
                <Budget 
                  spentAmount={0} 
                  maxAmount={0} 
                  category={"Loading..."} 
                />
              )}
            </React.Fragment>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default BudgetsCard;
