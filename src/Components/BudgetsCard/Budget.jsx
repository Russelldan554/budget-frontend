import React, { Component } from 'react';
import {
  Button, Card, CardHeader, CardBody, Col, Row, Progress,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class Budget extends Component {
  async deleteBudget(e) {
    e.preventDefault();

    const {
      getBudgets,
      id,
    } = this.props;

    const userId = localStorage.getItem('userId');
    API.deleteBudget(userId, id)
      .then(() => {
        getBudgets();
      });
  }

  determineColor() {
    const {
      maxAmount,
      spentAmount,
    } = this.props;

    let color = 'success';
    const percentSpent = (spentAmount / maxAmount);

    if (percentSpent > 0.95) {
      color = 'danger';
    } else if (percentSpent > 0.7) {
      color = 'warning';
    }

    return color;
  }

  render() {
    const {
      category,
      deleteButtons,
      maxAmount,
      spentAmount,
    } = this.props;

    return (
      <React.Fragment>
        <Col
          className={
            deleteButtons
              ? (
                'budget border-fix col-10 col-sm-11'
              )
              : (
                'budget col-12'
              )
          }
        >
          <Card>
            <CardHeader>
              <Row>
                <Col className="text-left category">
                  {category}
                </Col>
                <Col className="text-right amounts">
                  {`$${spentAmount}`}
                  <span className="of"> of </span>
                  {`$${maxAmount}`}
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <Progress
                    color={this.determineColor()}
                    value={spentAmount}
                    max={maxAmount}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col
          className={
            deleteButtons
              ? (
                'deleteBudget'
              )
              : (
                'deleteBudget hidden'
              )
          }
          xs={2}
          sm={1}
        >
          <Button
            color="danger"
            className={deleteButtons ? '' : 'hidden'}
            onClick={e => this.deleteBudget(e)}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </Button>
        </Col>
      </React.Fragment>
    );
  }
}

Budget.propTypes = {
  category:
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object],
    ).isRequired,
  deleteButtons: PropTypes.bool.isRequired,
  getBudgets: PropTypes.func.isRequired,
  id: PropTypes.number,
  spentAmount: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired,
};

Budget.defaultProps = {
  id: null,
};

export default Budget;
