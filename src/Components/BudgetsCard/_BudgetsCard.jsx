import React, { Component } from 'react';
import {
  Card, CardBody, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';
import Utils from '../Utils';

import Budget from './Budget';
import Graph from './SpendingGraph';
import WidgetCardHeader from '../WidgetCardHeader/_WidgetCardHeader';

class BudgetsCard extends Component {
  constructor(props) {
    super(props);
    this.getBudgets = this.getBudgets.bind(this);
    this.toggleDeleteButtons = this.toggleDeleteButtons.bind(this);
    this.state = {
      budgets: [],
      deleteButtons: false,
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getBudgets();
  }

  getBudgets() {
    API.getBudgets(1)
      .then((res) => {
        this.setState({
          budgets: res,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  }

  toggleDeleteButtons() {
    const { deleteButtons } = this.state;
    this.setState({
      deleteButtons: !deleteButtons,
    });
  }

  render() {
    const {
      actionConfirm,
      actionTitle,
      buttonID,
      cardHeader,
    } = this.props;

    const {
      budgets,
      deleteButtons,
      error,
      isLoading,
    } = this.state;

    return (
      <Card id="budgetsCard">
        <WidgetCardHeader
          actionConfirm={actionConfirm}
          actionTitle={actionTitle}
          buttonID={buttonID}
          cardHeader={cardHeader}
          getBudgets={this.getBudgets}
          toggleDeleteButtons={this.toggleDeleteButtons}
        />
        <CardBody>
          <Graph  />
          <Row noGutters fluid="true">
            {/* Create a Budget Component for each of the User's budgets */}
            <React.Fragment>
              {error
                ? (
                  <Budget
                    category={<span className="error">{error.message}</span>}
                    deleteButtons={deleteButtons}
                    getBudgets={this.getBudgets}
                    maxAmount={0}
                  />
                )
                : (
                  null
                )
              }
              {!isLoading ? (
                budgets.map((budget) => {
                  const {
                    budgetId,
                    category,
                    maxAmount,
                  } = budget;
                  return (
                    <Budget
                      category={category}
                      deleteButtons={deleteButtons}
                      getBudgets={this.getBudgets}
                      id={budgetId}
                      key={budgetId}
                      maxAmount={maxAmount}
                    />
                  );
                })
              ) : (
                <Budget
                  category="Loading..."
                  deleteButtons={deleteButtons}
                  getBudgets={this.getBudgets}
                  maxAmount={0}
                />
              )}
            </React.Fragment>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

BudgetsCard.propTypes = {
  actionConfirm: PropTypes.string,
  actionTitle: PropTypes.string,
  buttonID: PropTypes.string,
  cardHeader: PropTypes.string,
};

BudgetsCard.defaultProps = {
  actionConfirm: 'Create Budget',
  actionTitle: ' Budget',
  buttonID: 'Budget',
  cardHeader: Utils.cardHeaders[1],
};

export default BudgetsCard;
