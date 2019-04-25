import React, { Component } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Col, 
  Row, 
  Progress 
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class Budget extends Component {
  async deleteBudget(e) {
    e.preventDefault();
    let userId = localStorage.getItem("userId");
    API.deleteBudget(userId, this.props.id)
    .then(() => {
      this.props.getBudgets();
    })
  }

  determineColor(){
    var color = "success";
    var percentSpent = (this.props.spentAmount/this.props.maxAmount);

    if (percentSpent > 0.95) {
      color = "danger";
    } else if (percentSpent > 0.7) {
      color = "warning";
    }

    return color;
  }

  render() {
    return (
      <React.Fragment>
        <Col 
          className={
            this.props.deleteButtons ? 
              "budget border-fix col-10 col-sm-11" 
            : 
              "budget col-12"
          }
        >
          <Card>
            <CardHeader>
              <Row>
                <Col className="text-left category">
                  {this.props.category}
                </Col>
                <Col className="text-right amounts">
                  ${this.props.spentAmount} 
                  <span className="of"> of </span> 
                  ${this.props.maxAmount}
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <Progress 
                    color={this.determineColor()} 
                    value={this.props.spentAmount} 
                    max={this.props.maxAmount} 
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col 
          className={
            this.props.deleteButtons ? 
              "deleteBudget" 
            : 
              "deleteBudget hidden"
          } 
          xs={2} 
          sm={1}
        >
          <Button 
            color="danger" 
            className={this.props.deleteButtons ? "" : "hidden"}
            onClick={(e) => this.deleteBudget(e)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </Button>
        </Col>
      </React.Fragment>
    );
  }
}

Budget.propTypes = {
  category: 
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object]
    )
  .isRequired,
  deleteButtons: PropTypes.bool,
  getBudgets: PropTypes.func,
  id: PropTypes.number,
  spentAmount: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired
};

export default Budget;
